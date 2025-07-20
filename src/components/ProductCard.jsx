import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ image, title, price }) => {
  return (
    <div className={styles.productCard}>
      <img src={image} alt={title} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productPrice}>{price}</p>
        <button className={styles.addToCartBtn}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;