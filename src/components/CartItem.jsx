import React from 'react';
import styles from './CartItem.module.css';

const CartItem = ({ item }) => {
  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.name} className={styles.cartItemImage} />
      <div className={styles.cartItemDetails}>
        <p className={styles.itemName}>{item.name}</p>
        <p className={styles.itemSize}>Size: {item.size}</p>
        <div className={styles.itemColorOptions}>
          <p>Color:</p>
          <span className={`${styles.colorDot} ${styles.red}`}></span>
          <span className={`${styles.colorDot} ${styles.green} ${styles.active}`}></span>
          <span className={`${styles.colorDot} ${styles.blue}`}></span>
        </div>
      </div>
      <div className={styles.cartItemQuantity}>
        <button className={styles.quantityBtn}>-</button>
        <span>{item.quantity}</span>
        <button className={styles.quantityBtn}>+</button>
      </div>
      <p className={styles.cartItemPrice}>${item.price.toFixed(2)}</p>
    </div>
  );
};

export default CartItem;