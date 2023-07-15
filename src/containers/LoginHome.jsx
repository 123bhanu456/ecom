import React from 'react'
import  './HomeStyles.css'
import home1 from './images/home1.png';
import { Footer } from '../components/Footer'


function goto(){
  window.location.href='./Login';
}

function LoginHome(){
  return (
    <div>
          <div className='btdiv'>
            <button className='bt' onClick={goto}>Login/SignUp</button>
          </div>
    <div className='contentdiv'>
      <div className='content'>
      <h1 className='header'> Give Yourself A New Look</h1>
      </div>
      <div className='img'>
        <img src={home1} alt="home1"  className="img1"/>
      </div>
    </div>
    <Footer/>
    </div>
    
  )
}

export {LoginHome}