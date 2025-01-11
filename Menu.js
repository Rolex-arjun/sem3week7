import React from 'react';

const Menu = ({ items, addToCart }) => {
  return (
    <div className="menu">
      {items.map((item) => (
        <div className="card" key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
