import React from 'react';
import { PRODUCTS } from "../products";
import { Product } from "../components/product"
import { motion } from "framer-motion";
import './HomePage.css'

export const ElectronicsPage = () => {
    const a = PRODUCTS.slice(0,-12);
  return (
    <motion.div className="Home"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
        <div className="HomeTitle">
            <h1> <b>Electronics </b></h1>
        </div>
        <div className="top-sellers"> {a.map((product) => (
            <Product data={product}/>
        ))}</div>
    </motion.div>
  );
}