import React from 'react';
import { Link } from 'react-router-dom';

function CategoryCard({ id, title, thumbnail }) {
  return (
    <div className="category-card">
      <Link to={`/${id}`}>
        <img src={thumbnail} alt={title} />
        <h3>{title}</h3>
      </Link>
    </div>
  );
}

export default CategoryCard;