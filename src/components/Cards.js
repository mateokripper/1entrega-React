import React from 'react'
import ItemCount from './ItemCount'
const Cards = () => {
    const onAdd = (cantidad)=>{
        console.log(`se agrego ${cantidad} `)
    }
  return (
    <div>
        <h2 className="titulo">Productos</h2>
        <div className="cards d-flex align-items-center d-flex justify-content-evenly">    
            <div className="card col-6 col-sm-3">
                <img src='./assets/apple-iphone-14.jpg' alt=''/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <img alt=''></img>
                    <hr/>
                    <ItemCount stock = {5} initial = {1} onAdd = {onAdd} />
                </div>
            </div>
    </div>
    </div>
  )
}

export default Cards