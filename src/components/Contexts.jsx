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
        setProd([...Products,{...item}]);
    }


return(
     <Addtoc.Provider value={{AddCart,Products,Proddis,Todis}}>
      {children}
     </Addtoc.Provider>
)
}

export {Contexts};
