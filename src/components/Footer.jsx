import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <nav className="footer">
      <ul className="footer-navbar-list">
        <li>
          <Link to="/">
            <img src="talon-logo-light.png" alt="Talon logo" />
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
        <li>Designed by Alisha Upton</li>
      </ul>
    </nav>
  );
}
