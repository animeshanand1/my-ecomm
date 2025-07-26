import React from 'react';
import styles from './ProductCard.module.css';
import { StarIcon } from '../../Icons';

const ProductCard = ({ product }) => (
  console.log('product card rendered with 2:', product),
  <div className={styles.card}>
    <div className={styles.cardImageContainer}>
      <img src={product.image} alt={product.title} className={styles.cardImage} />
    </div>
    <div className={styles.cardBody}>
      <h3 className={styles.cardTitle}>{product.title}</h3>
      <div className={styles.cardRating}>
        <StarIcon fill="#facc15" />
        <span>{product.rating}</span>
        <span style={{ color: '#d1d5db' }}>({product.reviews})</span>
      </div>
      <p className={styles.cardPrice}>${product.price}</p>
    </div>
  </div>
);

export default ProductCard;