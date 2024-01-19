import React, { useState } from "react";
import { createContext } from "react";
export const Addtoc=createContext();

function Contexts({children}){
    const [Products,setProd]=useState([]);
    const [Proddis,setDis]=useState([]);

    function Todis(item){
      setDis([{...item}]);
    }

    function AddCart(item){

      let f=1;

      for(let i=0;i<Products.length;i++){
        if(item.id==Products[i].id)f=0;
      }
        if(f)setProd([...Products,{...item}]);

    }


return(
     <Addtoc.Provider value={{AddCart,Products,Proddis,Todis}}>
      {children}
     </Addtoc.Provider>
)
}

export {Contexts};
