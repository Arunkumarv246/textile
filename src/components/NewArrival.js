import React, { useState, useEffect } from 'react';
import '../styles/NewArrival.css';
import '../styles/productList.css'
import { products } from './products';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/productcontext'

const NewArrival = () => {
  const [color, setColor] = useState('');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');
  const [filteredProductsToDisplay, setFilteredProductsToDisplay] = useState([]);
  const { filteredProducts } = useProducts();
  const { addToCart } = useCart();
  
  useEffect(() => {
    if (filteredProducts.length !== 0) {
      //console.log(filteredProducts);
      setFilteredProductsToDisplay(filteredProducts);
    } else {
      setFilteredProductsToDisplay(products); 
    }
  }, [filteredProducts]);

  

  const handleFilter = () => {
    const from = parseFloat(priceFrom);
    const to = parseFloat(priceTo);

    const newFilteredProducts = products.filter((product) => {
      console.log(color);
      const matchesColor = color ? product.color === color : true;
      console.log(matchesColor);
      const matchesPrice = (!isNaN(from) ? product.price >= from : true ) && (!isNaN(to) ? product.price <= to : true);
      console.log(matchesPrice);
      console.log(matchesColor &&matchesPrice);
      return matchesColor && matchesPrice;
    });

    setFilteredProductsToDisplay(newFilteredProducts);
    console.log(newFilteredProducts);
  };



  return (
    <div className="new-arrival">
      <h1>New Arrivals</h1>
      
      <div className="filters">
        <div className="filter">
          <label>Color:</label>
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="">All</option>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="Brown">Brown</option>
            <option value="white">White</option>
            <option value="grey">Grey</option>
          </select>
        </div>

        <div className="filter">
          <label>Price From:</label>
          <input
            type="number"
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
            placeholder="From"
          />
        </div>

        <div className="filter">
          <label>Price To:</label>
          <input
            type="number"
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
            placeholder="To"
          />
        </div>
        
        <div className="filter">
          <button onClick={handleFilter}>Filter</button>
        </div>
      </div>
      <div className='product-page'>
        <div className="product-list">
          {filteredProductsToDisplay.length > 0 ? (
            filteredProductsToDisplay.map((product) => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="details">
                  <h3>{product.name}</h3>
                    <p>Price: &#8377;{product.price}</p>
                    <p>Available Size: {product.size}</p>
                    <button className="addtocart" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              </div>
          ))
        ) : (
          <p>No products found</p>
        )}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
