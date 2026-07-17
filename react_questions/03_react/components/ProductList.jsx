import React from "react";

const ProductList = ({ product, productSearch }) => {
  const filteredProduct = product.filter((product) =>
    product.toLowerCase().includes(productSearch.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredProduct.map((items, index) => (
          <li key={index}>{items}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
