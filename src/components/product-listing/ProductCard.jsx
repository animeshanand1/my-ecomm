import React from 'react';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className={styles.starFilled}>★</span>);
    } else {
      stars.push(<span key={i} className={styles.starEmpty}>★</span>);
    }
  }
  return <div className={styles.starRating}>{stars}</div>;
};

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <Link to={`/product/${product.id}`} className={styles.imageContainer}>
        <img src={product.imageUrl} alt={product.name} />
      </Link>
      <div className={styles.cardBody}>
        <div className={styles.brand}>{product.brand}</div>
        <h3 className={styles.productName}>{product.name}</h3>
        <div className={styles.price}>${product.price.toFixed(2)}</div>
        <StarRating rating={product.rating} />
      </div>
    </div>
  );
};

export default ProductCard;