import React, { useState } from 'react';
import './Signup.css';
function Signup(){
    const [fname,setfname]=useState("");
    const [lname,setlname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpswd]=useState("");

    function handlesub(e){
      e.preventDefault();
      fetch("https://d-up-4rqv.onrender.com/register",{
        method:"POST",
        crossDomain:true,
        headers:{
           "content-Type":"application/json",
           Accept:"application/json",
           "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
            fname,lname,email,password,
        })
      }).then((res)=>res.json())
      .then((data)=>{
        console.log(data,"userregisterd");
        if(data.status==="ok")
        alert("registerd sucessful");
        window.location.href="./Login";
      });
     

    }
    return(
   
          
      <div class="container">
      <div class="screen">
        <div class="screen__content">
          <form class="signin" onSubmit={handlesub}>
            <div class="signin__field">
            <i class="signin__icon fas fa-user"></i>
              <input type="text" class="signin__input" placeholder="First Name"  onChange={(e)=>setfname(e.target.value)}/>
            </div>
            <div class="signin__field">
            <i class="signin__icon fas fa-user"></i>
              <input type="text" class="signin__input" placeholder="Last Name"  onChange={(e)=>setlname(e.target.value)}/>
            </div>
            <div class="signin__field">
              <i class="signin__icon fas fa-user"></i>
              <input type="text" class="signin__input" placeholder="User name / Email"  onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div class="signin__field">
              <i class="signin__icon fas fa-lock"></i>
              <input type="password" class="signin__input" placeholder="Password"  onChange={(e)=>setpswd(e.target.value)}/>
            </div>
            <button class="button signin__submit">
              <span class="button__text">SIGN IN</span>
              <i class="button__icon fas fa-chevron-right"></i>
            </button>			

            
           
              
          

              	
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

export {Signup}