import React, { useContext } from 'react'
import { CartContext } from './Mycart'


function Items({id,title,description,price,img,quantity}){

  
  
  const {Remove,Add,Sub}=useContext(CartContext);

  
    
  return (
    <div>
     <div className='items-info'>
                  <div className='product-img'>
                    <img src={img} alt="" className='img'/>
                  </div>

                  <div className='title'>
                       <h3 className='titlehead'>{title}</h3>
                       <p>{description}</p>
                  </div>

                  <div className='add-sub'>
                  <i className="fa-solid fa-minus sub  minus" onClick={()=>Sub(id)} ></i>
                  <p className='ct'>{quantity}</p>
                  <i className="fa-regular fa-plus add  plus" onClick={()=>Add(id)} ></i>
                  </div>

                  <div className='price'>
                    {price*quantity}$
                  </div>

                  <div className='remove-item'>
                  <i className="fa-regular fa-trash-alt remove" onClick={()=>Remove(id)}  ></i>
                  </div>
           </div>
           <hr />
          
         
           
    </div>
  )
}

export {Items}
