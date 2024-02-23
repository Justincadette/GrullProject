import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar'
import { ShopContextProvider } from './context/shop-context';
import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes';


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
            <Navbar />
            <AnimatedRoutes />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;