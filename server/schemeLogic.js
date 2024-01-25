

const findSchemes = async (pool, formData) => {
  try {
      const query = `
          SELECT scheme_Name, Income, Benefits, Beneficiaries, Ministry
          FROM schemes
          WHERE
              ? BETWEEN Min_age AND Max_age
              AND ? <= Income
              AND (Gender = 'both' OR Gender = ?)
              AND Caste = ?
              AND (Minority_Group = ?)
              AND (Physically_Challenged = ?)
      `;

      const queryParams = [
          formData.age,
          formData.income,
          formData.gender.toLowerCase(),
          formData.caste.toLowerCase(),
          formData.isMinority.toLowerCase(),
          formData.isPhysicallyChallenged.toLowerCase(),
      ];

      console.log('Executing SQL Query:', query, 'with parameters:', queryParams);
      const [rows] = await pool.query(query, queryParams);
      console.log('Query Result:', rows);

      let bestMatchingScheme = null;
      let leastDifference = Infinity;

      const matchingSchemes = rows.map((row) => {
          const incomeDifference = Math.abs(formData.income - row.Income);

          console.log('Row:', row, 'Income Difference:', incomeDifference);

          if (incomeDifference < leastDifference) {
              leastDifference = incomeDifference;
              bestMatchingScheme = {
                  schemeName: row.scheme_Name,
                  schemeBefinits:row.Benefits,
                  schemeBenificiaries:row.Beneficiaries,
                  schemeMinistry: row.Ministry,
                  incomeDifference: incomeDifference,
              };
          }

          return {
              schemeName: row.scheme_Name,
              incomeDifference: incomeDifference,
              schemeBefinits:row.Benefits,
              schemeBenificiaries:row.Beneficiaries,
              schemeMinistry: row.Ministry,
          };
      });

      console.log('Matching Schemes:', matchingSchemes);
      console.log('Best Matching Scheme:', bestMatchingScheme);

      return {
          matchingSchemes: matchingSchemes,
          bestMatchingScheme: bestMatchingScheme,
      };
  } catch (error) {
      console.error('Error processing form data:', error);
      throw new Error('Internal server error');
  }
};

module.exports = {
  findSchemes,
};
