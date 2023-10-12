import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductNav from "./ProductNav";
import ProductsHeader from "./ProductsHeader";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);

  const addToCart = (productId) => {
    // Sends a request to my server to add the product to the cart
    axios.post("/api/cart/add-to-cart", { productId })
      .then((response) => {
        // Handle success (e.g., show a message)
        console.log(response.data.message);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error adding to cart:", error);
      });
  };


  useEffect(() => {
    axios
      .get("https://api.example.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <ProductNav />
      <ProductsHeader />
      <h3 className="product-cat">VASES</h3>
      <div>
        <ul className="products-row1">
          <li className="product-block">
            <div className="product-image-and-price">
              <img src="oshin-khandelwal-fq839fSNEuo-unsplash.png" />
              <p className="product-price font-face-te">$160</p>
            </div>
            <p className="product-title">mammoth bundle</p>
            <button>Add to Cart</button>
          </li>

          {/* ------------------------------------------- */}

          <li className="product-block">
            <div className="product-image-and-price mammoth-bundle-block">
              <div key={products._id}>
                <h2>{products.name}</h2>
                <Link to={`/products/${products._name}`}>View Details</Link>
                {/* This is where I add more product information */}
              </div>
              <Link to="/product-listing">
                <img src="pexels-vlada-karpovich-7902913.png" />
              </Link>
              <p className="product-price font-face-te">$72</p>
            </div>
            <p className="product-title">mammoth vase</p>
            <button>Add to Cart</button>
          </li>


          {/* -------------------------------------------------- */}

          <li className="product-block">
            <div className="product-image-and-price">
              <img src="jaikishan-patel-yS960iAbSqo-unsplash.png" />
              <p className="product-price font-face-te">$56</p>
            </div>
            <p className="product-title">mint jug vase</p>
            <button>Add to Cart</button>
          </li>
        </ul>
      </div>
      {/* --------------------------- */}
      <p className="product-cat sculptures-product-cat">SCULPTURES</p>
      <div>
        <ul className="products-row2">
          <li className="product-block">
            <div className="product-image-and-price">
              <img src="andrew-petrov-hopnkQoC0dg-unsplash.png" />
              <p className="product-price font-face-te">$40</p>
            </div>
            <p className="product-title">pinky hands</p>
            <button>Add to Cart</button>
          </li>
          <li className="product-block">
            <div className="product-image-and-price">
              <img src="franco-antonio-giovanella-bodma3C2GHE-unsplash.png" />
              <p className="product-price font-face-te">$48</p>
            </div>
            <p className="product-title">incense holder hand</p>
            <button>Add to Cart</button>
          </li>
          <li className="product-block">
            <div className="product-image-and-price">
              <img src="allison-saeng-WO7nL4oLdP4-unsplash.png" />
              <p className="product-price font-face-te">$64</p>
            </div>
            <p className="product-title">arched sculpture set</p>
            <button>Add to Cart</button>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
