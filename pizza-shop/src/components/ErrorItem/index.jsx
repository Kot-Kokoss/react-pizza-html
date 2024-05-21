import React from 'react';
import EmptyCartImg from '../../assets/img/empty-cart.png';

const Error = () => {
  return (
    <>
      <div className="error-block">
        <h1 className="error-block__title">Корзина пустая 😕</h1>
        <p className="error-block__info">
          Вероятней всего, вы не заказывали ещё пиццу. <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img className="error-block__image" src={EmptyCartImg} alt="Empty-cart" />
        <button className="button-black">Вернуться назад</button>
      </div>
    </>
  );
};

export default Error;
