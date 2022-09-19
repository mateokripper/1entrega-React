import React, { useEffect, useState } from 'react';
import { getProductById } from '../helpers/getData.js';
import ItemDetail from './ItemDetail';
import { productList } from '../prod/productos.js';
import './styles/ItemDetailContainer.css';
//ItemDetailContainer recibe por prop un id, que deberá ser el id de un producto determinado
const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    //Nótese que tengo que asegurarme que el id sea un número válido, muchas veces este id puede venir como parámetro en una URL por lo que tengo que parsearlo a un número.

    //getProductById es una función que cree que se encuentra en la carpeta helpers,
    //Esta función recibe el id y la función setProduct para setear product con el producto correspondiente al id. 
    getProductById(Number(id), setProduct);
    console.log(productList);
  }, [id]);
  //En mi Array de dependencias tengo definido el id, esto es porque si el id cambia, osea si llego a salicitar otro producto, todo lo que está dentro del useEffect debería volver a ejecutarse

  return (
    <section className="item-detail-container">
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;