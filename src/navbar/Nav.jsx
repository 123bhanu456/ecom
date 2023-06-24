import React from "react";
import './Navstyle.css';
import logo from './logo.png';
import {NavLink} from 'react-router-dom';

function Nav(){
    return(
        <div>
 <div className="maindiv">
             <div>
                <h3 className="name">
                    DressUp
                </h3>
                </div>
             <div className='logodiv'>
       <img src={logo} alt="DressUp" className="logo" />
      </div>
        </div>

        <div className="nav">
           <div className="navdata">
           <NavLink to='/'> Home</NavLink>
           </div>
           <div className="navdata">
           <NavLink to='/Men'> Men</NavLink>
           </div>
           <div className="navdata">
           <NavLink to='/Women'> Women</NavLink>
           </div>
           <div className="navdata">
           <NavLink to='/Kids'> Kids</NavLink>
           </div>
           <div className="navdata">
           <NavLink to='/Mycart'> Mycart</NavLink>
           </div>
        </div>
        </div>
       
        


       
        
    );
}

export {Nav}