import React, { useEffect, useState } from 'react'
import { Nav } from '../navbar/Nav'
import  './HomeStyles.css'
import home1 from './images/home1.png';
import { Footer } from '../components/Footer'




function Home(){
  const [user,setuser]=useState([]);

  useEffect(()=>{
 fetch("http://localhost:5000/userDetails",{
      method:"POST",
      crossDomain:true,
      headers:{
         "content-Type":"application/json",
         Accept:"application/json",
         "Access-Control-Allow-Origin":"*",
      },
      body:JSON.stringify({
          token:window.localStorage.getItem("token"),
      })
    }).then((res)=>res.json())
    .then((data)=>{
      console.log(data,"userData");
      setuser(data.data);
    });
  },[]);
   
 
  return (
    <div>
          <Nav/>
    <div className='contentdiv'>
      <div className='content'>
        <h1 className='header'>Hey {user.fname}</h1>
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

export {Home}