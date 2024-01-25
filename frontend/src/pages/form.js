import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../css/form.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

const Form = () => {

    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        age: '',
        income: '',
        caste: '',
        gender: '',
        isMinority: '',
        isPhysicallyChallenged: '',
    });

    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    

    const handlePrevStep = () => {
        if (step > 1) {
            setStep(step - 1);
            setErrorMessage('');
        }
    };

    const handleNextStep = () => {
        if (step < 6) {
            setStep(step + 1);
        } else {
            console.log('Form Data:', formData);
        }
    };

    // const handleFindSchemes = async () => {
    //     try {
    //       const response = await fetch('http://localhost:5000/find-schemes', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(formData),
    //       });
      
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
      
    //       const result = await response.json();
    //       console.log('Schemes:', result);
    //       console.log('Before navigate');
    //       navigate('/result', { state: { result } });
    //       console.log('After navigate');
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //       // Handle errors (e.g., display an error message to the user)
    //     }
    //   };


    const handleFindSchemes = async () => {
        try {
          console.log('Before fetch'); // Check if this is logged
      
          const response = await fetch('http://localhost:5000/find-schemes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          console.log('After fetch'); // Check if this is logged
      
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const result = await response.json();
          console.log('Schemes:', result);
      
          // Check if result is set before navigating
          if (result) {
            console.log('Result set, navigating to /result');
            // Navigate to /result with result data
            navigate('/result', { state: { result } });
          } else {
            console.error('Result is undefined or null');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          // Handle errors (e.g., display an error message to the user)
        }
      };
      
    const renderForm = () => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <label style={{'marginRight':'20px', fontSize:'25px', marginTop:'20px'}}>Age:</label>
                        <input
                            type="text"
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                );
            case 2:
                return (
                    <div>
                        <label style={{'marginRight':'20px', fontSize:'25px', marginTop:'20px'}}>Income:</label>
                        <input
                            type="text"
                            name="income"
                            value={formData.income}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                );
                case 3:
            return (
                <div>
                    <label style={{'marginRight':'20px', fontSize:'25px', marginTop:'20px'}}>Caste:</label>
                    <select
                       style={{width:'200px',fontSize:'25px'}}
                        name="caste"
                        value={formData.caste}
                        onChange={handleInputChange}
                    >
                        <option value='none'>None</option>
                        <option value="sc">SC</option>
                        <option value="st">ST</option>
                        <option value="general">General</option>
                        <option value="obc">OBC</option>
                    </select>
                </div>
            );
            case 4:
                return (
                    <div>
                        <label style={{'marginRight':'20px', fontSize:'25px', marginTop:'20px'}}>Gender:</label>
                        <div>
                            <label style={{'marginRight':'20px', fontSize:'20px',marginTop:'10px'}}>
                                <input
                                   style={{marginRight:'2px'}}
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    checked={formData.gender === 'male'}
                                    onChange={handleInputChange}
                                />
                                Male
                            </label >
                            <label style={{'marginRight':'20px', fontSize:'20px',marginTop:'10px'}}>
                                <input
                                   style={{marginRight:'2px'}}
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    checked={formData.gender === 'female'}
                                    onChange={handleInputChange}
                                />
                                Female
                            </label>
                            <label style={{'marginRight':'20px', fontSize:'20px',marginTop:'10px'}}>
                                <input
                                    style={{marginRight:'2px'}}
                                    type="radio"
                                    name="gender"
                                    value="other"
                                    checked={formData.gender === 'other'}
                                    onChange={handleInputChange}
                                />
                                Other
                            </label>
                        </div>
                    </div>
                );
    
            case 5:
                return (
                    <div>
                        <label style={{'marginRight':'20px', fontSize:'25px', marginTop:'20px'}}>Belongs to Minority:</label>
                        <div>
                            <label style={{'marginRight':'20px', fontSize:'20px',marginTop:'10px'}}>
                                <input
                                    style={{marginRight:'2px'}}
                                    type="radio"
                                    name="isMinority"
                                    value="yes"
                                    checked={formData.isMinority === 'yes'}
                                    onChange={handleInputChange}
                                />
                                Yes
                            </label>
                            <label style={{'marginRight':'20px', fontSize:'20px',marginTop:'10px'}}>
                                <input
                                    style={{marginRight:'2px'}}
                                    type="radio"
                                    name="isMinority"
                                    value="no"
                                    checked={formData.isMinority === 'no'}
                                    onChange={handleInputChange}
                                />
                                No
                            </label>
                        </div>
                    </div>
                );
    
            case 6:
                return (
                    <div>
                        <label style={{'marginRight':'20px', fontSize:'25px', marginTop:'20px'}}>Physically Challenged:</label>
                        <div>
                            <label style={{'marginRight':'20px', fontSize:'20px',marginTop:'10px'}}>
                                <input
                                    style={{marginRight:'2px'}}
                                    type="radio"
                                    name="isPhysicallyChallenged"
                                    value="yes"
                                    checked={formData.isPhysicallyChallenged === 'yes'}
                                    onChange={handleInputChange}
                                />
                                Yes
                            </label>
                            <label style={{'marginRight':'20px', fontSize:'20px',marginTop:'10px'}}>
                                <input
                                    style={{marginRight:'2px'}}
                                    type="radio"
                                    name="isPhysicallyChallenged"
                                    value="no"
                                    checked={formData.isPhysicallyChallenged === 'no'}
                                    onChange={handleInputChange}
                                />
                                No
                            </label>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <header>
                <img id='logo1' src="https://i.postimg.cc/rFqtdScz/1200px-Flag-of-India-svg.png" alt="" />
                <p>
                    <span id='title1'>e-</span>
                    <span id='title2'>Yojana</span>
                    <span id='title3'>Connect</span>
                </p>
                <img id='logo2' src="https://i.postimg.cc/P53f5DrG/1200px-Government-of-India-logo-svg.png" alt="" />
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
            <div id='formdiv'>
                <h3 id="heading3">Please fill the details!!</h3>
                <div id='container'>
                    <h2 style={{ marginBottom: '30px' }}>Step {step}</h2>
                    {renderForm()}
                    {step > 1 && <button id='prev' onClick={handlePrevStep}><FaArrowLeft /></button>}
                    {step < 6 && <button id='next' onClick={handleNextStep} ><FaArrowRight /></button>}
                </div>
                <button id='find' onClick={() => handleFindSchemes()}>Find Schemes</button>
            </div>
        </div>
    )
}

export default Form;