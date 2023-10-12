import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar font-face-pdr">
      <ul className="navbar-list">
        <li>
          <Link to="/">
            <img src="talon-logo.png" alt="Talon logo" />
          </Link>
        </li>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/products">PRODUCTS</Link>
        </li>
        <li>
          <Link to="/artisanbios">ARTISAN BIOS</Link>
        </li>
        <li>
          <Link to="/cart">
            <img src="shopping-bag-icon.png" alt="shopping bag icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
