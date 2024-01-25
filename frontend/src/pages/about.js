import React from 'react';
import '../css/about.css'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
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
        <div class="about">
        <div class="inner-section">
            <h1>About Us</h1>
            <p class="text">
                In a universe of endless government plans and projects, exploring the maze of advantages and valuable open doors can be complex. Many are unaware of the support and resources available to them, often missing out on valuable assistance. This is where e-Yojana Connect steps in as your trusted guide to unlocking the full potential of government initiatives.
e-Yojana Connect is more than just a portal; it's your personalized path to discovering and selecting the most suitable government schemes according to your unique needs. Our innovative system simplifies the overwhelming world of government programs by employing content filtering algorithms. It considers your specific circumstances, preferences, and aspirations to recommend the one scheme that can make a real difference in your life. Whether you're seeking financial aid, healthcare support, education opportunities, or more, e-YojanaConnect is here to ensure you make informed choices that enhance your well-being and prosperity.
            </p>
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
    )
}

export default About;