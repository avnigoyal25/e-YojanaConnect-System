const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const mysql = require('mysql2/promise');
const { findSchemes } = require('./schemeLogic.js');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'eyojanaconnect',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

app.use(cors());
app.use(express.json());

// Test the database connection
pool.getConnection()
  .then((connection) => {
    console.log('Connected to the database');
    connection.release();

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

  app.post('/find-schemes', async (req, res) => {
    try {
        const formData = req.body;
        // console.log('Received Form Data:', formData);

        const { matchingSchemes, bestMatchingScheme } = await findSchemes(pool, formData);

        return res.status(200).json({
            message: 'Form data processed successfully',
            matchingSchemes: matchingSchemes,
            bestMatchingScheme: bestMatchingScheme,
        });
    } catch (error) {
        console.error('Error processing form data:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});