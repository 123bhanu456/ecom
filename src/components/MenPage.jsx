import React, { useContext } from 'react';
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

  return (
    <div>
       <Nav/>
       <div className='heading'><h1 >Men</h1></div>
       
        <sec className='menPageDiv'>
            {
               Items.map((item)=>{
                const { id, title, description, price,img} = item;
                return(
                    <div key={id} className='containerDiv' >
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
                })
            };
           
        </sec>
        <Footer/>
    </div>
  )
}

export {MenPage}