import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(){
    return(
        <div className='Footer'>
        <div className='ContactInfo'>
          <div className='contact'>
            <h3 className='Head'>Contact</h3>
            <p>
              <strong>Address: </strong>562 Wellington Road,street 32,San
              Fransisco
            </p>
            <p>
              <strong>Phone:</strong>+01 2222 365 /(+91) 01 2345 6789
            </p>
            <p>
              <strong>Hours:</strong>10:00 - 18:00, Mon - Sat
            </p>
          </div>
          <div className='SocialLinks'>
            <p className='Head'>Follow Us</p>
           <Link><i className="fa-brands fa-instagram icon"></i></Link>
           <Link> <i class="fa-brands fa-twitter icon"></i></Link>
            <Link><i class="fa-brands fa-facebook icon"></i></Link>
            <Link><i class="fa-brands fa-pinterest icon"></i></Link>
            <Link><i class="fa-brands fa-youtube icon"></i></Link>
          </div>
        </div>

        <div className='Links'>
          <h3 className='Head'>About</h3>
          <Link>About Us</Link>
          <Link>Delivery Information</Link>
          <Link>Privacy Policy</Link>
          <Link>Terms & Conditions</Link>
          <Link>Contact Us</Link>
        </div>

        <div className='WebAvail'>
        <h3 className='Head'>Install App</h3>
            <p>From App Store or Google Play</p>
            <div className='Store'>
            <a href="#"><i className="fab fa-app-store icon"></i></a>
            <a href="#"><i className="fab fa-google-play icon"></i></a>
            </div>
            <p>Secured Payment Gateways</p>
            <a href="#"><i className="fas fa-credit-card icon"></i></a>
        </div>
      </div>
    )
}
export {Footer}