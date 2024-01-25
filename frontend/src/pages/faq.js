import React from 'react';
import { Link } from 'react-router-dom';
import '../css/faq.css';
import { useState } from 'react';

const FAQ = () => {

    const faqData = [
        {
            question: 'What is eYojanaConnect?',
            answer: 'It is an AI based recommendation engine which recommend you the best suited schemes as per your needs.',
        },
        {
            question: 'How eYojanaConnect will help common citizens?',
            answer: 'It will reduce the time and effort of citizens in searching for appropriate government schemes.The easy user interface of myScheme helps common people a lot in discovering and applying for schemes.',
        },
        {
            question: 'Is eYojanaConnect available for all citizens?',
            answer:'Yes, eYojanaConnect is designed to be accessible to all citizens. Whether you are an individual, a business owner, or a community organization, you can use the platform to discover and engage with government programs that align with your needs.',
        },
        {
            question: 'How can I benefit from eYojanaConnect?',
            answer:'By using eYojanaConnect, you can easily explore and apply for different government schemes and services. The platform offers a user-friendly interface to track your applications, receive updates on scheme statuses, and stay informed about new initiatives.',
        }
    ];

    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion((prev) => (prev === index ? null : index));
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


            <h2 id='heading'>
                Frequently Asked Questions
            </h2>
            <p id='heading' style={{marginTop:'20px'}}>(Tap to see answer)</p>

            <div className="layout">
                {faqData.map((item, index) => (
                    <div className={`accordion ${index === activeAccordion ? 'active' : ''}`} key={index}>
                        <div className="accordion__question" onClick={() => toggleAccordion(index)}>
                            <p>{item.question}</p>
                        </div>
                        <div className="accordion__answer">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FAQ;