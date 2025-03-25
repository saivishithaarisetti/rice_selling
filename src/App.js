import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Products from './pages/Products';
import Cart from './components/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <Router basename='/rice_selling'>
      <CartProvider>
        <div className="app">
          <Header /> 
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={
                  <Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;