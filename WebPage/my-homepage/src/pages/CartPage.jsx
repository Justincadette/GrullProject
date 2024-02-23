import React, { useContext } from 'react';
import { ShopContext } from '../context/shop-context';
import { PRODUCTS } from '../products';
import { CartItem } from './CartItem';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import './CartPage.css';

export const CartPage = () => {
  // Cart state and functionalities
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <motion.div className="cart"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      >
      <div>
        <h1>Your Cart Items </h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0) {
            return <CartItem data={product} />
          }
        })}
      </div>
      {totalAmount > 0 ? (
      <div className="checkout">
        
        <p> Subtotal: ${totalAmount}</p>
        <button onClick={() => navigate("/")}> Continue Shopping </button>
        <button> Checkout </button>
      </div>
      ) : (
          <h1> Your Cart is Empty </h1>
      )}
    </motion.div>
  );
}

