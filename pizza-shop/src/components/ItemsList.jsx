import React from 'react';
import PizzaItem from './PizzaItem';

function ItemsList({ list }) {
  return (
    <>
      <h2 key={list} className="content__title">
        Все пиццы
      </h2>
      <div className="content__items">
        {list.map((item) => (
          <PizzaItem
            id={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            sizes={item.sizes}
            types={item.types}
            price={item.price}
            category={item.category}
            rating={item.rating}
          />
        ))}
      </div>
    </>
  );
}

export default ItemsList;
