import React from 'react';
import ProductCard from '../components/ProductCard';

function CategoryPage() {
  // Mock product data
  const products = [
    { id: 1, title: 'Product 1', thumbnail: 'product1.jpg', description: 'Description of Product 1', price: 10.99 },
    { id: 2, title: 'Product 2', thumbnail: 'product2.jpg', description: 'Description of Product 2', price: 19.99 },
    // Add more products
  ];

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;