import React, { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProducts = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <ProductContext.Provider value={{ filteredProducts, setFilteredProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
