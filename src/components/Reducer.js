function Reducer(state,action){
    if(action.type==='Remove_Item'){
        return{
            ...state,
        Item:state.Item.filter((curItem)=>{
         return action.id!==curItem.id
        })
    };
}
   else if(action.type==='ADD'){
       let updatedCart=state.Item.map((curItem)=>{
           if(curItem.id===action.id){
            return{...curItem,quantity:curItem.quantity+1}
           }
           return curItem;
       })

       return {...state,Item:updatedCart}
    
   }

   else if(action.type==='SUB'){
    let updatedCart=state.Item.map((curItem)=>{
            if(curItem.id===action.id){
                return{...curItem,quantity:curItem.quantity-1}
            }

            return curItem;
    })
    .filter((curItem)=>{
       return curItem.quantity!==0
    })

          return {...state,Item:updatedCart}
   }

   else if(action.type==='CLEAR'){
    return{
        ...state,Item:[]
    }
   }

   else if(action.type==='TOTALITEM'){
    const {totalItem}=state.Item.reduce(
        (accum,curVal)=>{
       const {quantity}=curVal;
       accum.totalItem+=quantity;
       return accum;
    },{
        totalItem:0
    });
    return {...state,totalItem}
   }
   else if(action.type==='TOTALPRICE'){
    const {totalPrice}=state.Item.reduce(
        (accum,curVal)=>{
       const {quantity,price}=curVal;
       accum.totalPrice+=quantity*price;
       return accum;
    },{
        totalPrice:0
    });
    return {...state,totalPrice}
   }

   


  return state;
}

export {Reducer}