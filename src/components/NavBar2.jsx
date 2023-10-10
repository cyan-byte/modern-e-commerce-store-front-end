import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 230) {
        // 300px is the height of the giant Talon logo
        setShowLogo(true); // If scrolled down 300 pixels or more, show the logo
      } else {
        setShowLogo(false); // Otherwise, hide the logo
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <nav className={`navbar ${showLogo ? "show-logo" : ""}`}>
      <ul className="navbar-list">
        <li>
          <Link to="/">
            <img
              src="talon-logo.png"
              alt="Talon logo"
              className={`logo ${showLogo ? "show" : ""}`}
            />
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
