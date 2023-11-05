// products.jsx
import React from 'react';
import productsData from './products.json';
import NavBar from './navBar';

const ProductList = () => {
  return (
    <div>
      <NavBar/>
      {productsData.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.image} alt={product.name} />
          {/* Add a button to "Add to Cart" or link to the product page */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
