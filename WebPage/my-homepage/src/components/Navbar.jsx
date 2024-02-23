import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContextProvider } from '../context/shop-context';
import "./Navbar.css"


export const Navbar = () => {
    return <div className="navbar">
        <ShopContextProvider>
        <div className="links">
            <Link to="/"> Home </Link>
            <Link to="/wishlist"> Wishlist</Link>
            <Link to="/cart">
                <ShoppingCart size={32}/>
            </Link>
        </div>
        </ShopContextProvider>
    </div>;
};