// src/components/ProductList.js

import React from 'react';
//import React, { useState } from 'react';
//import Cart from './Cart';
import '../styles/productList.css';
import { useCart } from '../context/CartContext';
import { products } from './products';
import { useProducts } from '../context/productcontext'

const ProductList = () => {
  //const [cart, setCart] = useState([]);
  const { addToCart } = useCart();
  const { filteredProducts } = useProducts();
  const productsToDisplay = filteredProducts.length!=0? filteredProducts : products;

   


  return (
    <div className="product-page">
      <div className="product-list">
        {productsToDisplay.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="details">
            <h3>{product.name}</h3>
            <p>Price: &#8377;{product.price}</p>
            <p>Available Size: {product.size}</p>
            <button className='addtocart' onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div> 
  );
};

export default ProductList;
