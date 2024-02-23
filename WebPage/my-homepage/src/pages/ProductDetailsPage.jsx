import React from 'react';

function ProductDetailsPage({ match }) {
  // Mock product data
  const product = {
    id: match.params.productId,
    title: 'Product 1',
    description: 'Description of Product 1',
    price: 10.99,
    // Add more product details
  };

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add more product details */}
    </div>
  );
}

export default ProductDetailsPage;