import React from "react";

export default function CartItem() {
  return (
    <div className="cart-item-container">
        <div className="cart-item-left">
      <div className="cart-item-image-container">
        <img src="pexels-vlada-karpovich-7902913.png" className="mammoth-vase-cart-item"/>
      </div>
      <div className="delete-and-update-row">
        <img src="trash-icon.png" className="trash-icon"/>
        <p>1</p>
        <img src="green-plus-icon.png" className="green-plus-icon"/>
      </div>
      </div>
      <div className="cart-item-right">
        <h2>Mammoth Vase</h2>
        <p>price: <span className="product-home-price">$62</span> </p>
        <p>color: deep sand</p>
        <div className="cart-delete-button">Delete</div>
      </div>
    </div>
  );
}
