import React from "react";
import "../CSS/ProductCard.css";
import { useState } from "react";

const ProductCard = ({ title = 'Smart Watch', price ='Rs 5000.00', imageUrl, description = '' }) => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-card">
      {/* <img src={imageUrl} alt={title} className="product-image" /> */} 
      <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxJlUpXo3OcIryTTQKtgYqjtRkoIKj-ljU0Eq6K-p53g&s=10'} alt={title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <div className="product-price">{price}</div>
      </div>

      <div className="product-actions">
        {quantity === 0 ? (
          <button className="add-to-cart-btn" onClick={handleIncrement}>
            Add to Cart
          </button>
        ) : (
          <div className="quantity-counter">
            <button className="counter-btn" onClick={handleIncrement}>
              {" "}+{" "}
            </button>
            <span className="quantity-value">{quantity}</span>
            <button className="counter-btn" onClick={handleDecrement}>
              {" "}-{" "}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
