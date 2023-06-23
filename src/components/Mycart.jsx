import React,{useState} from 'react';
import './mycart.css'
import {NavLink} from 'react-router-dom';
import {Items} from './Items'
import {Products} from './Products.js'

function Mycart(){
    const [Item,setItem]= useState(Products);

    let sum=0;
    Item.forEach((curItem)=>{
      sum+=curItem.price*curItem.amount
    })

   
    
  return (
    <div>
          <header>
        <div className='shop'>
        <div>
        <NavLink to='/'> <i class="fa-solid fa-arrow-right-long">  Shop More  </i></NavLink>
        </div>
        <div>
        <i class="fa-sharp fa-solid fa-cart-shopping">{Item.length}</i>
        </div>
        </div>
       
    </header>

    <section className='main-cart'>
        <div>
        <p className='cart'>My Cart</p>
       <p className='item-count'>You have <span>{Item.length}</span> items in your cart</p>
        </div>

        <div className='cart-items'>
          <div className='cart-items-container'>

            {
                Item.map((curItem)=>{
                     return <Items key={curItem.id} {...curItem}/>
                })
            }
          </div>
        </div>
        
        <div className='total'>
           <div>
            <h3>Total amount :{sum}$</h3>
             <button className='pay'>Pay</button>
           </div> 
        </div>
    </section>

    </div>
   

  )
}

export {Mycart}