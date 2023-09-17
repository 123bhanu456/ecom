import React, { useState } from 'react';
import './Signup.css';
function Signup(){
    const [fname,setfname]=useState("");
    const [lname,setlname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpswd]=useState("");

    function handlesub(e){
      e.preventDefault();
      fetch("https://d-up.onrender.com/register",{
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
        
       <div className='container'>
        <div className='condiv'>
        <h3>SignUp </h3>
        <form>
            <div className='indiv'>
            <label className='lab' >First name</label>
            <input 
            type="text" 
            className='inp'
            placeholder='First name'
            onChange={(e)=>setfname(e.target.value)}/>
            </div>


            <div className='indiv'>
            <label className='lab'>Last name</label>
            <input 
            type="text" 
            className='inp'
            placeholder='Last name'
            onChange={(e)=>setlname(e.target.value)}/>
            </div>


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

            {/* <div className='indiv'>
             <input type="submit" value="Signup" className='btn inp' />
            </div> */}

           <div className='btdiv'>
            <button className='bt' onClick={handlesub}>SignUp</button>
          </div>
            
        </form>
        </div>
             
       </div>
          
      
    )
}

export {Signup}