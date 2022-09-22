import React from 'react';
import { useNavigate } from 'react-router';
import { useState } from 'react';

import './styles/ItemCount.css';


const ItemCount = ({ initial, stock, onAdd }) => {
  //hook de estado
  const [qty, setQty] = useState(initial);
  const [showButton, setshowButton] = useState(false);

  let navigate = useNavigate();

  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          disabled={qty === initial ? true : null}
        >
          -
        </button>
        <span className="count-container__qty">{qty}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          disabled={qty === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="button-primary"
        onClick={() => {onAdd(qty); setshowButton(true)}}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
      { (showButton && navigate('/detail') ) && <button
        onClick={()=>{navigate('/cart')}}
        className="button-primary button-finalizar-compra"
      >
        Finalizar compra
      </button>}
    </div>
  );
};

export default ItemCount;
