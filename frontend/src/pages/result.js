import React from 'react';
import { useLocation } from 'react-router-dom';
import '../css/result.css';
import { Link } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const result = location.state?.result;

  return (
    
    <div id='result'>
      <header style={{backgroundColor:'white', height:'100px'}}>
        <img id='logo1' src="https://i.postimg.cc/rFqtdScz/1200px-Flag-of-India-svg.png" alt="" />
        <p>
            <span id='title1'>e-</span>
            <span id='title2'>Yojana</span>
            <span id='title3'>Connect</span>
        </p>
        <img id='logo2'  src="https://i.postimg.cc/P53f5DrG/1200px-Government-of-India-logo-svg.png" alt="" />
        <img id='logo3' src="https://i.postimg.cc/250Wmyg3/image.jpg" alt="" />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
               <Link to="/faq">FAQs</Link>
            </li>
          </ul>
        </nav>
      </header>
      {result && result.matchingSchemes &&result.bestMatchingScheme ? (
        <div>
          <div>
          <h2 style={{paddingTop:'20px',paddingLeft:'20px'}}>Most suitable recommmended Scheme:</h2>
          <p id='cont-1'>
            <p id='text'>{result.bestMatchingScheme.schemeMinistry}</p>
            <h3 style={{color:'green',paddingLeft:'40px',fontFamily:'sans-serif'}}>{result.bestMatchingScheme.schemeName}{' '}</h3>
            <p style={{color:'grey',fontFamily:'sans-serif',fontSize:'20px'}}>{result.bestMatchingScheme.schemeBefinits}{' '}</p>
            <p style={{color:'grey',fontFamily:'sans-serif',fontSize:'20px'}}>Benificiaries:{result.bestMatchingScheme.schemeBenificiaries}{' '}</p>
            <button className='button-3'>Apply</button>
          </p>
          </div>

          <h2 style={{paddingTop:'20px',paddingLeft:'20px'}}>Other recommended Schemes:</h2>
          <ul>
            {result.matchingSchemes.map((scheme, index) => (
              <li style={{listStyle:'none'}} key={index}>
                <div id='cont-1'>
                <p id='text'>{scheme.schemeMinistry}</p>
            <h3 style={{color:'green',paddingLeft:'40px',fontFamily:'sans-serif'}}>{scheme.schemeName}{' '}</h3>
            <p style={{color:'grey',fontFamily:'sans-serif',fontSize:'20px'}}>{scheme.schemeBefinits}{' '}</p>
            <p style={{color:'grey',fontFamily:'sans-serif',fontSize:'20px'}}>Benificiaries:{scheme.schemeBenificiaries}{' '}</p>
            <button className='button-3'>Apply</button>
            </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p id='error'>OOPsss!!!No matching schemes found</p>
      )}
    </div>
  );
};

export default ResultPage;
