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
        
     
      <div class="container">
      <div class="screen">
        <div class="screen__content">
          <form class="login" onSubmit={handlesub}>
            <div class="login__field">
              <i class="login__icon fas fa-user"></i>
              <input type="text" class="login__input" placeholder="User name / Email"  onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div class="login__field">
              <i class="login__icon fas fa-lock"></i>
              <input type="password" class="login__input" placeholder="Password"  onChange={(e)=>setpswd(e.target.value)}/>
            </div>
            <button class="button login__submit">
              <span class="button__text">Log In Now</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>			

            
            <Link to="/SignUp" className='sign'>SignUp</Link> 
              
          

              	
          </form>
          
        </div>
        <div class="screen__background">
          <span class="screen__background__shape screen__background__shape4"></span>
          <span class="screen__background__shape screen__background__shape3"></span>		
          <span class="screen__background__shape screen__background__shape2"></span>
          <span class="screen__background__shape screen__background__shape1"></span>
        </div>		
      </div>
    </div>
      
    )
}

export {Login}