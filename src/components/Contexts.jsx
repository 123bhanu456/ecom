import React, { useState } from "react";
import { createContext } from "react";
export const Addtoc=createContext();

function Contexts({children}){
    const [Products,setProd]=useState([]);

    function AddCart(item){
        setProd([...Products,{...item}]);
    }


return(
     <Addtoc.Provider value={{AddCart,Products}}>
      {children}
     </Addtoc.Provider>
)
}

export {Contexts};
