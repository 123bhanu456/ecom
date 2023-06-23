import React from 'react'


function Items({title,description,price,img,amount}){

    
  return (
    <div>
     <div className='items-info'>
                  <div className='product-img'>
                    <img src={img} alt="" />
                  </div>

                  <div className='title'>
                       <h3>{title}</h3>
                       <p>{description}</p>
                  </div>

                  <div className='add-sub'>
                  <i className="fa-solid fa-minus sub" ></i>
                  <input type="text" value={amount} className='ct' />
                  <i className="fa-regular fa-plus add"  ></i>
                  </div>

                  <div className='price'>
                    {price*amount}
                  </div>

                  <div className='remove-item'>
                  <i className="fa-regular fa-trash-alt remove"  ></i>
                  </div>
           </div>
           <hr />
          
         
           
    </div>
  )
}

export {Items}
