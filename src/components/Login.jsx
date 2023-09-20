import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
function Login(){
    const [email,setemail]=useState("");
    const [password,setpswd]=useState("");

    function handlesub(e){
        e.preventDefault();
        fetch("https://d-back.onrender.com/login",{
        method:"POST",
        crossDomain:true,
        headers:{
           "content-Type":"application/json",
           Accept:"application/json",
           "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
            email,password,
        })
      }).then((res)=>res.json())
      .then((data)=>{
        console.log(data,"userlogged");
        if(data.status==="ok")
        alert("login sucessful");
        window.localStorage.setItem("token",data.data);
        window.localStorage.setItem("LoggedIn",true);
        window.location.href="/UserHome";
      });
     
    }
    return(
        
       <div className='container'>
        <div className='condiv'>
        <h3>Login</h3>
        <form onSubmit={handlesub}>

            <div className='indiv'>
            <label className='lab'>email</label>
            <input 
            type="email" 
            className='inp'
            placeholder=' Enter email'
            onChange={(e)=>setemail(e.target.value)}/>
            </div>


            <div className='indiv'>
            <label className='lab'>Password</label>
            <input 
            type="password" 
            className='inp'
            placeholder='Enter Password'
            onChange={(e)=>setpswd(e.target.value)}/>
            </div>

            <div className='btdiv'>
            <button className='bt' onClick={handlesub}>Login</button>
          </div>

            <div className='btdiv'>
               <Link to="/SignUp" className='col'>SignUp</Link> 
            </div>
            
        </form>
        </div>
             
       </div>
          
      
    )
}

export {Login}