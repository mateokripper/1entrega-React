import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Hero.css';

const Hero = ({ title }) => {

  let navigate = useNavigate();

  return (
    <section className="hero hero-slide-1">
      <div className="hero-container">
        <article className="hero-container__text-box">
          <h1>{title}</h1>
          <p>
            ¡La mente muy clara y la cerveza muy fría! Vení a conocer las
            mejores cervezas del inframundo.
          </p>
          <button 
            className="button-primary"
            onClick={()=>navigate('/products')}
          >
            Comprar
          </button>
        </article>
      </div>
    </section>
  );
};

export default Hero;