import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"; // Import your Home component
import Products from "./components/Products"; // Import your Products component
import ArtisanBios from "./components/ArtisanBios";
import Cart from "./components/Cart";
import "./App.css";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    <Router>
      <div className="App font-face-pdr">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/artisanbios" element={<ArtisanBios/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product-listing" element = {<ProductListing/>} />
          {/* the :productID parameter tells me which product's details should be displayed */}
          <Route path="/products/:productId" element={ProductListing} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

// https://modern-e-commerce-store.onrender.com
// https://modern-e-commerce-store.onrender.com/api/products
