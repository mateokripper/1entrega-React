import ItemCount from './ItemCount';
import './styles/ItemDetail.css';
import React, {useState} from "react";
import { Link } from "react-router-dom";


const ItemDetail = ({ item }) => {
  
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (qty) => {
    setGoToCart(true);
  };

  console.log(item);
  return (
    <article className="product-detail">
      <img src={item.thumbnail} alt="" className="product-detail__img" />
      <div className="product-detail__info">
        <h2 className="name">{item.name}</h2>
        <p className="description">{item.description}</p>
        <ul className="info-grid">
          <li>Price:</li>
          <li>${item.price}</li>
          <li>Size:</li>
          <li>{item.size}</li>
          <li>Type:</li>
          <li>{item.type}</li>
        </ul>
        {goToCart ? (
						<Link to="/cart"> Terminar al carrito</Link>
					) : (
						<ItemCount initial={3} stock={5} onAdd={onAdd} />
					)}
      </div>
    </article>
  );
};
  export default ItemDetail;
