import React,{createContext} from 'react';
import './mycart.css'

import {Products} from './Products.js'
import { ContextCart } from './ContextCart';

export const CartContext=createContext();

function Mycart(){

  return (
   <CartContext.Provider value={Products}>
    <ContextCart/>
   </CartContext.Provider>
  )
}

export {Mycart}