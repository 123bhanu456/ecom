import React, { useEffect, useState } from 'react'
import { Nav } from '../navbar/Nav'
import  './HomeStyles.css'
import home1 from './images/home1.png';
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom';




function LoginHome(){
  return (
    <div>
          <Nav/>
          <div className='logdiv'><h3><Link to='/Login' className='log'>Login/SignUp</Link></h3></div> 
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