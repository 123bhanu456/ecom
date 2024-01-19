import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom';
import {Items} from './Items'
import {CartContext} from './Mycart'


function ContextCart(){
    const {Item,Clear,totalItem,totalPrice} =useContext(CartContext);

    if(Item.length===0){
      return(
        <div>
        <header>
      <div className='shop'>
      <div>
      <NavLink to='/Men'> <i className="fa-solid fa-arrow-right-long color">Shop More</i></NavLink>
      </div>
      <div>
      <i class="fa-sharp fa-solid fa-cart-shopping">{totalItem}</i>
      </div>
      </div>
     
    </header>
    
    <section className='main-cart'>
      <div>
      <p className='cart'>My Cart</p>
     <p className='item-count'>You have <span>{totalItem}</span> items in your cart</p>
      </div>
    
      <div className='cart-items'>
      <h2 className='empty'>Your Cart Is Empty</h2>
      </div>
      
      <div className='total'>
      <div><h3 className='totalhead'>Total Price {totalPrice}$</h3></div>
        <div className='pay-clear'>
          <div> <button className='pay'>Pay</button></div>
          <div> <button className='clear' onClick={()=>Clear()}>Clear cart</button></div>
        </div>
          
      </div>
    </section>
    
    </div>
        
      )
    }
  return (

    <div>
    <header>
  <div className='shop'>
  <div>
  <NavLink to='/men'> <i className="fa-solid fa-arrow-right-long color"> Shop More </i></NavLink>
  </div>
  <div>
  <i class="fa-sharp fa-solid fa-cart-shopping">{totalItem}</i>
  </div>
  </div>
 
</header>

<section className='main-cart'>
  <div>
  <p className='cart'>My Cart</p>
 <p className='item-count'>You have <span>{totalItem}</span> items in your cart</p>
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
  <div><h3 className='totalhead'>Total Price {totalPrice}$</h3></div>
    <div className='pay-clear'>
      <div> <button className='pay'>Pay</button></div>
      <div> <button className='clear' onClick={()=>Clear()}>Clear cart</button></div>
    </div>
      
  </div>
</section>

</div>


  )
}

export {ContextCart}