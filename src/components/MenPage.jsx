import React, { useContext, useState } from 'react';
import './MenPage.css'
import { Nav } from '../navbar/Nav';
import { MenProd } from './MenProd';
import { Addtoc } from './Contexts';
import { Footer } from './Footer';
import { Link } from "react-router-dom";
function MenPage(){

    const Items=[...MenProd];
    const {AddCart}=useContext(Addtoc);
    const {Todis}=useContext(Addtoc);
 
    const [val,setR]=useState(600);
    const [com,setCom]=useState("");

  
    
  return (
    <div>
       <Nav/>
       <div className='heading'><h1 >Men</h1></div>
        
       <div className='Filter'>
  <div className="range-style">
    <label for="pi_input">Price Range:</label>
    <input id="pi_input" type="range" min="0" max="2000" step="50" onChange={(e) => setR(e.target.value)} />
    {val}
  </div>


       <div>
        <label for="ser">Company  :  </label>
        <input id="ser" type="text" onChange={(e)=>setCom(e.target.value)}/>
       </div>
        </div>
       
        <sec className='menPageDiv'>
            {
               Items.map((item)=>{
                const { id, title, description, price,img} = item;

                if(price<=val&&(com===description||com==="")){
                  return(
                  
                    <div key={id}  className='containerDiv' >
                      
                      <div className='imgdiv' onClick={()=>Todis(item)}>
                        <Link to='/display'>
                        <img className='img'
                        src={img}
                        alt=""
                      />
                        </Link>
                        </div>
                        <div className='title-desc'>
                            <p className='font'>{title}</p>
                            <p className='font'>{description}</p>
                        </div>

                        <div className='price-addCart'>
                           <span className='font'>{price}$</span> 
                           <span><i className="fa-sharp fa-solid fa-cart-shopping add" onClick={()=>AddCart(item)}></i></span>
                        </div>
                       
                    </div>
                );
                }
               
                })
            }
           
        </sec>
        <Footer/>
    </div>
  )
}

export {MenPage}