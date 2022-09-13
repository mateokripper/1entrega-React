import ItemJS from "./Item";
import { useState } from "react";
import { useEffect } from "react";
import productos from "../prod/productos.json"

const ItemListJS = ()=> {
  
   
    let [ItemsS, setItemsS] = useState([]);
/*

    useEffect(()=>{
        let promiseItemRender = new Promise((resolve, reject) =>{
            setTimeout(()=>
              {
                 resolve(productos); 
              }
              ,2000)
             
            })
     
             promiseItemRender.then((respuesta)=>{
        setItemsS(productos);
        console.log(respuesta)
    })
    },[])
    
*/

   return(
    <>
    <ItemJS ItemsS={ItemsS}/>
    </>
   )
  
    
}

export default ItemListJS;