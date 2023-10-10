import React, { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
// import CartItem from './CartItem';

function Cart() {
  return (
    <div>
      <NavBar />
      <h2>Shopping Cart</h2>
      <Footer/>
    </div>
  );
}

export default Cart;
