import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function ProductListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // This fetches products from my server
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products"); // match this with server.js
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, []);
  
  // displays products
  return (
    <div>
      <NavBar />
      <div>
      <h1>Product Listing</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} />
          <p>Price: ${product.price}</p>
          <p>{product.details}</p>
        </div>
      ))}
    </div>
      {/* <div className="product-listing-container">
        <header className="bold-product-name">MAMMOTH VASE</header>
        <div className="listing-image-and-details">
          <div className="product-listing-left">
            <img
              src="pexels-vlada-karpovich-7902913.jpg"
              alt="outdoor vase"
              className="mv-product-listing"
            />
          </div>
          <div className="product-listing-right">
            <p>
              Elevated, handcrafted, over-sized pottery decor suitable for
              indoor & outdoor use
            </p>
            <h2>$72</h2>
            <div className="listing-add-to-cart-button">Add to Cart</div>
          </div>
        </div>
        <div className="featured-products">
          <div className="featured-block">
            <img src="pexels-andre-william-3010771.png" />
            <p>The Sandy Teapot</p>
          </div>
          <div className="featured-block">
            <img src="jaikishan-patel-yS960iAbSqo-unsplash.png" />
            <p>Mint Jug Vase</p>
          </div>
          <div className="featured-block">
            <img src="oshin-khandelwal-fq839fSNEuo-unsplash.png" />
            <p>Mammoth Bundle</p>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}
