import React from 'react';
import '../css/contact.css'
import { Link } from 'react-router-dom';
import { FaSearchLocation } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
    return (
        <div id='contact'>
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
            
      <section id="page-header" class="about-header">
        <h2 style={{paddingTop:'50px'}}>#letsTalk</h2>
        <p>Leave A Message! We will love to hear from you.</p>
    </section>

    <section id="contact-details" class="section-p1">
        <div class="details">
            <span style={{fontFamily: 'Spartan,sans-serif'}}>Get In Touch</span>
            <h2>Visit one of our agency locations or contact us today</h2>
            <h3 style={{fontFamily: 'Spartan,sans-serif'}}>Head Office</h3>
            <div>
                <li>
                <FaSearchLocation style={{marginRight:'10px'}} />
                    <p style={{fontFamily: 'Spartan,sans-serif'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, incidunt.</p>
                </li>
                <li>
                <FaMailBulk style={{marginRight:'10px'}}/>
                    <p style={{fontFamily: 'Spartan,sans-serif', fontSize:'20px'}}>contact@gmail.com</p>
                </li>
                <li>
                <FaPhone style={{marginRight:'10px'}}/>
                    <p style={{fontFamily: 'Spartan,sans-serif', fontSize:'20px'}}>9876543210</p>
                </li>
                <li>
                <FaClock style={{marginRight:'10px'}}/>
                    <p style={{fontFamily: 'Spartan,sans-serif', fontSize:'20px'}}>Mon-Sat 9:00 am to 5:00 pm</p>
                </li>
            </div>
        </div>
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.7111201098937!2d77.96464791386569!3d30.415936981748608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d4890d7c1735%3A0x22d3ae324c238e3c!2sUPES!5e0!3m2!1sen!2sin!4v1675931301588!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>

    <section class="form-details" style={{border:'1px solid black'}}>
        <form style={{marginLeft:'300px'}} action="">
            <span>Leave a Message</span>
            <h2>We love to hear from you!</h2>
            <input type="text" placeholder="your name"/>
            <input type="text" placeholder="E-mail"/>
            <input type="text" placeholder="Subject"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="your message"></textarea>
            <button class="normal">Submit</button>
        </form>
    </section>

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
                <FaFacebook />
                <FaInstagram />
                <FaSquareTwitter />
                <FaYoutube />
                <FaWhatsapp />
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

export default Contact;