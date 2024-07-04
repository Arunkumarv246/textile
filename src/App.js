

import React from 'react';
//import {Navbar,Header,ProductList} from './root';
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductList from './components/productList';
import {Routes,Route} from "react-router-dom";
import NewArrival from './components/NewArrival';

//import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />}/>
        <Route path="/new arrival" element={<NewArrival />}/>
      </Routes>
     
      
      

      
     
      
      
    </div>

  );
}

export default App;
