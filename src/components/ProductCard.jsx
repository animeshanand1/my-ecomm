import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';
import styles from './ProductCard.module.css';

const ProductCard = ({ id, image, title, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart({ id, name: title, price: parseFloat(price.replace('$', '')), image, quantity: 1 }));
  };

  return (
    <div className={styles.productCard}>
      <img src={image} alt={title} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productPrice}>{price}</p>
        <button onClick={handleAddToCart} className={styles.addToCartBtn}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
