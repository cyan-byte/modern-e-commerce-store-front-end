import React from "react";

export default function CartItem() {
  return (
    <div className="cart-item-container">
        <div className="cart-item-left">
      <div className="cart-item-image-container">
        <img src="pexels-vlada-karpovich-7902913.png" />
      </div>
      <div className="delete-and-update-row">
        <img src="trash-icon.png"/>
        <p>1</p>
        <img src="green-plus-icon.png"/>
      </div>
      </div>
      <div className="cart-item-right">
        <h2>Item Title</h2>
        <p>price</p>
        <p>color</p>
        <div className="cart-delete-button">Delete</div>
      </div>
    </div>
  );
}
