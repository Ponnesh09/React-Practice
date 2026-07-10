import React, { useState } from "react";

const ShoppingCart = () => {
  // Mock data representing database objects with unique IDs
  const [cartItem, setCartItems] = useState([
    { id: "prod_9b1a", name: "Wireless Headphones", price: 99 },
    { id: "prod_3c4d", name: "Mechanical Keyboard", price: 120 },
    { id: "prod_7e8f", name: "Ergonomic Mouse", price: 60 },
  ]);

  // Handler to delete items from the UI
  const removeItem = (itemId) => {
    setCartItems(cartItem.filter(item => item.id !== itemId));
  };

  return (
    <div>
      <h1>Your shopping card</h1>
      {cartItem.length === 0 ? (
        <p>your card is empty.</p>
      ) : (
        <ul>
          {/*CRITICAL: The key must be placed on the absolute outermost element 
              returned inside the map function. We use the stable item.id here.
             */}

          {cartItem.map((item) => (
            <li key={item.id}>
              <span>
                {item.name} - Rs{item.price}
              </span>

              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShoppingCart;
