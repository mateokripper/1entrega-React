const ItemJS = ( props )=> {
    
    return (
    <>
     {
        props.ItemsS.map(
         (cadaItem) => 
         <>
         <br></br>
         <p>Nombre del Celular:{cadaItem.name}</p>
         <p>Precio del Celular:{cadaItem.priece}</p>   
         <p>Stock:{cadaItem.stock}</p>
         
         
         </>     
         
         )
     }
        
    </>
    )
}

export default ItemJS;