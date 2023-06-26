import React from 'react';
import {WomenProd} from './WomenProd'
import './WomenPage.css'
import { Nav } from '../navbar/Nav';

function WomenPage (){

    const Items=[...WomenProd];
  return (
    <div>
       <Nav/>
       <div className='heading'><h1 >Women</h1></div>
       
        <sec className='womenPageDiv'>
            {
               Items.map((item)=>{
                const { id, title, description, price,img} = item;
                return(
                    <div key={id} className='containerDiv'>
                      <div className='imgdiv'>
                        <img className='img'
                        src={img}
                        alt=""
                      />
                        </div>
                        <div className='title-desc'>
                            <p className='font'>{title}</p>
                            <p className='font'>{description}</p>
                        </div>

                        <div className='price-addCart'>
                           <span className='font'>{price}$</span> 
                           <span><i className="fa-sharp fa-solid fa-cart-shopping add"></i></span>
                        </div>
                       
                    </div>
                );
                })
            };
           
        </sec>
    </div>
  )
}

export {WomenPage}