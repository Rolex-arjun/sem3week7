import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';

const App = () => {
  const [items] = useState([
    { id: 1, name: 'Pizza', price: 12.99 },
    { id: 2, name: 'Burger', price: 8.99 },
    { id: 3, name: 'Pasta', price: 10.99 }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <>
      <Header />
      <Menu items={items} addToCart={addToCart} />
    </>
  );
};

export default App;
