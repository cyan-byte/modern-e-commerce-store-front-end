import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();

  // Fetch the product details for the specified productId
  // You can make an API request to your server to get the data.

  return (
    <div>
      {/* Display the product details */}
      <h1>Product Detail Page</h1>
      <p>Product ID: {productId}</p>
      {/* Add more details here */}
    </div>
  );
}

export default ProductDetail;