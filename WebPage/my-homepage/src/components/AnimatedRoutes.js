import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
import { ElectronicsPage } from '../pages/ElectronicsPage';
import { ClothingPage } from '../pages/ClothingPage';
import { AccessoriesPage } from '../pages/AccessoriesPage';
import { AnimatePresence } from "framer-motion";


function AnimatedRoutes() {
    const location = useLocation();
  return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route index element={<HomePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/electronics" element={<ElectronicsPage />} />
                <Route path="/clothing" element={<ClothingPage />} />
                <Route path="/accessories" element={<AccessoriesPage />} />
            </Routes>
        </AnimatePresence>
  );
}

export default AnimatedRoutes;