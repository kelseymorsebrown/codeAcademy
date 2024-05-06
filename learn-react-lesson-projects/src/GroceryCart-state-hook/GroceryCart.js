import React, { useState } from 'react';
import ItemList from './ItemList';
import { produce, pantryItems } from './storeItems';

export default function GroceryCart() {
  // declare and initialize state
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((prev) => [item, ...prev]);
  };

  const removeItem = (targetIndex) => {
    console.log(targetIndex);
    setCart((prev) => prev.filter((item, idx) => idx !== targetIndex));
  };

  return (
    <div>
      <h1>Grocery Cart</h1>
      <h2>Your Cart</h2>
      <p>Click an item in the cart list to remove it</p>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Available Items</h2>
      <p>Click an item to add it to your cart</p>
      <h3>Produce</h3>
      <ItemList items={produce} onItemClick={addItem} />
      <h3>Pantry Items</h3>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}
