import React, { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import CartItem from './CartItem';

function Cart() {
  return (
    <div>
      <NavBar />
      <div className="shopping-cart-container">
        <div className="cart-header-container">
          <header className="bold-cart-header">CART</header>
        </div>
        <div className="cart-item-container">
          <CartItem />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
