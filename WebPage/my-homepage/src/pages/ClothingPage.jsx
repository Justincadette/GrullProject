import React from 'react';
import { PRODUCTS } from "../products";
import { Product } from "../components/product"
import { motion } from "framer-motion";
import './HomePage.css'

export const ClothingPage = () => {
    const a = PRODUCTS.slice(-12,-6);
  return (
    <motion.div className="Clothing"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
        <div className="ClothingTitle">
            <h1> <b>Clothing </b></h1>
        </div>
        <div className="top-sellers"> {a.map((product) => (
            <Product data={product}/>
        ))}</div>
    </motion.div>
  );
}