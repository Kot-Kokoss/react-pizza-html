import React from 'react';
import PizzaItem from './PizzaItem';

function ItemsList({ data }) {
  console.log(data);
  return (
    <>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <PizzaItem
        // id={item.id}
        // imageUrl={item.imageUrl}
        // title={item.title}
        // syzes={item.syzes}
        // types={item.types}
        // price={item.price}
        // category={item.category}
        // rating={item.rating}
        />
        {/* {data.map((item) => (
          
        ))} */}
      </div>
    </>
  );
}

export default ItemsList;
