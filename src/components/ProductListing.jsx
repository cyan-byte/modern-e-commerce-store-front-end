import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductListing() {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    // This fetches products from my server using axios
    async function fetchProducts() {
      try {
        const response = await axios.get(
          "https://modern-e-commerce-store.onrender.com/api/productDetail/" +
            productId
        );
        if (response.status === 200) {
          setProduct(response.data);
        } else {
          console.error("Failed to fetch product details");
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  }, [productId]);

  const addToCart = () => {
    if (product) {
      const updatedCart = [...cart, product];
      setCart(updatedCart);

    }
  };

  // displays products
  return (
    <div>
      <NavBar />
      <div className="product-listing-container">
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
            <div>color:</div>
            <div>details +</div>
            <p>Product ID: {productId}</p>

            <div className="listing-add-to-cart-button" onClick={addToCart}>
              Add to Cart
            </div>
          </div>
        </div>

        {/* ------------------------------------------- */}
        <p className="featured-header">Featured Items</p>
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
      </div>
      <Footer />
    </div>
  );
}
