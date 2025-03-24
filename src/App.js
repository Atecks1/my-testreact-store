import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ProductList from './components/ProductList';
import FormExample from './components/FormExample';
import StorePage from './components/StorePage';
import SneakerDetail from './components/SneakerDetail'
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="app-container">
        <nav>
          {isMobile ? (
            // Бургер-меню для мобильных устройств
            <div className="burger-menu">
              <button onClick={toggleMenu}>☰ Menu</button>
              <ul className={isMenuOpen ? 'active' : ''}>
                <li>
                  <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
                </li>
                <li>
                  <Link to="/products" onClick={() => setIsMenuOpen(false)}>Products</Link>
                </li>
                <li>
                  <Link to="/form" onClick={() => setIsMenuOpen(false)}>Form</Link>
                </li>
                <li>
                  <Link to="/store" onClick={() => setIsMenuOpen(false)}>Store</Link>
                </li>
              </ul>
            </div>
          ) : (
            // Обычное меню для десктопных устройств
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/form">Form</Link>
              </li>
              <li>
                <Link to="/store">Store</Link>
              </li>
            </ul>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/store" element={<StorePage />} />

        </Routes>
        
      </div>
      <Routes>
         <Route path="/form" element={<FormExample />} />
         <Route path="/sneakers/:id" element={<SneakerDetail />} />
        </Routes>
    </Router>
  );
}

export default App;