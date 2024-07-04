import React, { useState } from 'react';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
//import { useProducts } from '../context/ProductContext';
import { useProducts} from '../context/productcontext'
import '../styles/Navbar.css';
import { Link } from "react-router-dom";
import { products } from './products';

const Navbar = () => {
  const { cart } = useCart();
  const { setFilteredProducts } = useProducts();
  const [showCart, setShowCart] = useState(false); // false
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilter = () => {
    console.log(products);
    const newFilteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredProducts(newFilteredProducts);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={`${process.env.PUBLIC_URL}/images/logo.png.jpg`} alt="Company Logo" />
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/new arrival">New Arrival</Link></li>
        <li><Link to="/topwear">Topwear</Link></li>
        <li><Link to="/bottomwear">Bottomwear</Link></li>
        <li><Link to="/track-order">Track Order</Link></li>
        <li><Link to="/store-locator">Store Locator</Link></li>
      </ul>
      <div className="navbar-icons">
        <div className="search-icon-container">
          <FaSearch className="navbar-icon" onClick={toggleSearch} />
          {showSearch && (
            <input
              type="text"
              className="search-input"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              onKeyPress={(e) => e.key === 'Enter' && handleFilter()}
            />
          )}
        </div>
        <div className="cart-icon-container" onClick={toggleCart}>
          <FaShoppingCart className="navbar-icon" />
          <span className="cart-count">{cart.length}</span>
          {showCart && (
            <div className="cart-dropdown">
              {cart.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <ul>
                  {cart.map((item, index) => (
                    <li key={index}>{item.name} - {item.price}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
        <FaUser className="navbar-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
