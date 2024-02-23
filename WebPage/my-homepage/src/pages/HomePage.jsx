import React from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryCard from '../components/CategoryCard';
import img1 from '../assets/Categories/1.png';
import img2 from '../assets/Categories/2.png';
import img3 from '../assets/Categories/3.png';
import { PRODUCTSTOP } from "../productsTop";
import { Product } from "../components/product"
import { motion } from "framer-motion";
import './HomePage.css'

export const HomePage = () => {

    const navigate = useNavigate();
  return (
    <motion.div className="Home"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
        <div className="HomeTitle">
            <h1> <b>Cadette's Department Store</b></h1>
        </div>
        <div className="category-list">
            <CategoryCard id="electronics" title="Electronics" thumbnail= {img1} onClick={() => navigate("/")}/>
            <CategoryCard id="clothing" title="Clothing" thumbnail= {img2} onClick={() => navigate("/clothing")} />
            <CategoryCard id="accessories" title="Accessories" thumbnail= {img3} onClick={() => navigate("/accessories")} />
        </div>
        <div className="TopSellersTitle">
            <h1>Top Sellers</h1>
        </div>
        <div className="top-sellers"> {PRODUCTSTOP.map((product) => (
            <Product data={product}/>
        ))}</div>
    </motion.div>
  );
}
