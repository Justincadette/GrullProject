import React from 'react';
import { PRODUCTS } from "../products";
import { Product } from "../components/product"
import './HomePage.css'

export const AccessoriesPage = () => {
    const a = PRODUCTS.slice(-6);
  return (
    <div className="Home">
        <div className="HomeTitle">
            <h1> <b>Accessories </b></h1>
        </div>
        <div className="top-sellers"> {a.map((product) => (
            <Product data={product}/>
        ))}</div>
    </div>
  );
}