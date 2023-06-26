import React,{createContext,useEffect, useReducer} from 'react';
import './mycart.css'

import { ContextCart } from './ContextCart';
import { Reducer } from './Reducer';
import {Products} from './Products';
import { Nav } from '../navbar/Nav'


export const CartContext=createContext();



function Mycart(){

  const initialState={
    Item:Products,
    totalPrice:0,
    totalItem:0,
  
  };


  const [state,dispatch] =useReducer(Reducer,initialState);
    function Remove(id){
      return dispatch({
        type:'Remove_Item',
        id:id,
        Item:initialState.Item,
      })
    }

    function Add(id){
     return dispatch({
      type:'ADD',
      id:id,
     })
    }

    function Sub(id){
      return dispatch({
        type:'SUB',
        id:id
      })
    }

    function Clear(){
      return dispatch({
        type:'CLEAR',
        Item:initialState.Item
      })
    }

    

    

    useEffect(()=>{
        dispatch({
          type:'TOTALITEM'
        })
        dispatch({
          type:'TOTALPRICE'
        })
    },[state.Item])
  return (
   <CartContext.Provider value={{...state,Remove,Add,Sub,Clear} }>
    <Nav/>
    <ContextCart/>
   </CartContext.Provider>
  )
}

export {Mycart}
