import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from 'components/Header/Header';
import Home from 'pages/Home/Home';
import Cart from 'pages/Cart/Cart';
import { MyGlobalContext } from './CartContext';

const App = () => {
  const [copy, setCopy] = useState<any>([]);
  return (
    <div>
      <Header />
      <MyGlobalContext.Provider value={{ copy, setCopy }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </MyGlobalContext.Provider>
    </div>
  );
};

export default App;
