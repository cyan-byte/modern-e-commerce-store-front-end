import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar"; // Import your Navbar component
import Home from "./components/Home"; // Import your Home component
import Products from "./components/Products"; // Import your Products component
import ArtisanBios from "./components/ArtisanBios";
import Cart from "./components/Cart";
import "./App.css";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/artisanbios" element={<ArtisanBios/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product-listing" element = {<ProductListing/>} />
          <Route path="/products/:productID" component={ProductDetail} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
