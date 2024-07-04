import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './context/productcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <ProductProvider>
    <BrowserRouter>
   <App />
   </BrowserRouter>
   </ProductProvider>
   </CartProvider>
   </React.StrictMode>
);

reportWebVitals();
