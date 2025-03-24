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
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [selectedType, setSelectedType] = useState('All');

  return (
    <Router>
      <CartProvider>
        <div className="app">
          <Header /> 
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={
                <>
                  <Filters
                    priceRange={priceRange}
                    onPriceRangeChange={setPriceRange}
                    selectedType={selectedType}
                    onTypeChange={setSelectedType}
                  />
                  <Products />
                </>
              } />
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