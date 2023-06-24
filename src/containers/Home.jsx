import React from 'react'
import { Nav } from '../navbar/Nav'
import  './HomeStyles.css'
import home1 from './images/home1.png'

function Home(){
  return (
    <div>
          <Nav/>
    <div className='contentdiv'>
      <div className='content'>
        <h1 className='header'>Give Yourself A New Look</h1>
      </div>
      <div className='img'>
        <img src={home1} alt="home1"  className="img1"/>
      </div>
    </div>
    </div>
    
  )
}

export {Home}