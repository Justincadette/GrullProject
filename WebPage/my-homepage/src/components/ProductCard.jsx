import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  const { id, title, thumbnail, description, price } = product;

  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={thumbnail} alt={title} />
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
}

export default ProductCard;