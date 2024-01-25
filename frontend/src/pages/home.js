import React from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

const Home = () => {
  return (
    <div>
      <header>
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
              <Link  to="/">Home</Link>
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
      <br></br>
      <Carousel className='full-screen-carousel'>
      <Carousel.Item>
        <img src="https://i.postimg.cc/ZnMQNCw6/Bannercmst-scaled.jpg" alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://i.postimg.cc/RFfCT12k/Screenshot-2023-12-31-192327.png" alt="" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://i.postimg.cc/d1KcwbSf/Screenshot-2023-12-31-192313.png" alt="" />
      </Carousel.Item>
    </Carousel>
      <button className='button-89'>
      <Link style={{textDecoration:'none', color: 'var(--color)'}} to="/apply">Find Schemes For You</Link></button>
    <div>
        <h2 id='how'>How it works?</h2>
        <div id='card'>
        <Card style={{ width: '18rem', marginLeft:'40px', border:'1px solid black'}}>
      <Card.Img style={{height:'200px', width:'280px'}} variant="top" src="https://i.postimg.cc/Tw10zjzh/image.png" />
      <Card.Body style={{backgroundColor:'rgb(217, 230, 211)'}}>
        <Card.Title>Enter details</Card.Title>
        <Card.Text>
        Start by entering your basic details!
        </Card.Text>
      </Card.Body>
    </Card>
    <img id='arrow' src="https://i.postimg.cc/RFcPQ1nY/arrow-icon-vector-removebg-preview.png" alt="" />
    <Card style={{ width: '20rem' , marginLeft:'120px',border:'1px solid black'}}>
      <Card.Img style={{height:'200px', width:'280px'}} variant="top" src="https://i.postimg.cc/HnywHTT7/image.png" />
      <Card.Body style={{backgroundColor:'rgb(217, 230, 211)'}}>
        <Card.Title>Searching</Card.Title>
        <Card.Text>
        Our AI engine will recommend you the best scheme
        </Card.Text>
      </Card.Body>
    </Card>
    <img id='arrow' src="https://i.postimg.cc/RFcPQ1nY/arrow-icon-vector-removebg-preview.png" alt="" />
    <Card style={{ width: '18rem', marginLeft:'120px', border:'1px solid black'}}>
      <Card.Img style={{height:'200px', width:'280px'}} variant="top" src="https://i.postimg.cc/KYC4bBjJ/8062190.png" />
      <Card.Body style={{backgroundColor:'rgb(217, 230, 211)'}}>
        <Card.Title>Apply</Card.Title>
        <Card.Text>
        Apply for the recommended scheme
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    </div>

    <footer class="section-p1">
        <div class="col">
            <img src="images/logo2__2_-removebg-preview.png" alt="" />
            <h4>Contact</h4>
            <p><strong>Address:</strong>Shivpuri colony dakpathar</p>
            <p><strong>Phone:</strong>+91 9076858490</p>
            <p><strong>Hours</strong>9:00 am-11:00 pm Mon-Sun</p>
            <div class="follow">
                <h4>Follow us</h4>
                <div class="icon">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                </div>
            </div>
        </div>
        <div class="col">
            <h4>About</h4>
            <a href="#">About us</a>
            <a href="#">Privacy policy</a>
            <a href="#">Terms and conditions</a>
            <a href="#">Contact us</a>
        </div>
        <div class="col" >
            <h4>My account</h4>
            <a href="#">Sign in</a>
            <a href="#">About</a>
            <a href="#">Contact us</a>
            <a href="#">FAQs</a>
        </div>
        <div class="col install">
            <h4>Install app</h4>
            <p>From app store or google play</p>
            <div class="row">
                <img src="images/app.jpg" alt=""/>
                <img src="images/play.jpg" alt=""/>
                <p>Secured payment gateway</p>
                <img src="images/pay.png" alt=""/>
            </div>
        </div>
        <div class="copyright">
            <p>@ 2023, Avni Goyal-e-YojanaConnectSystem</p>
        </div>
    </footer>

    </div>
  );
};

export default Home;
