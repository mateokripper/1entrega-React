import React, { useEffect, useState } from 'react';
import { getProductById } from '../helpers/getData.js';
import ItemDetail from './ItemDetail';
import { productList } from '../prod/productos.js';
import './styles/ItemDetailContainer.css';
//ItemDetailContainer recibe por prop un id, que deberá ser el id de un producto determinado
const ItemDetailContainer = ({ id }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(Number(id), setProduct);
    console.log(productList);
  }, [id]);
  

  return (
    <section className="item-detail-container">
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;