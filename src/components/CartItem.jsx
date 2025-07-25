import React from "react";
import styles from "./CartItem.module.css";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.name} className={styles.cartItemImage} />
      <div className={styles.cartItemDetails}>
        <p className={styles.itemName}>{item.name}</p>
        <p className={styles.itemSize}>Size: {item.size}</p>
      </div>
      <div className={styles.cartItemQuantity}>
        <button
          className={styles.quantityBtn}
          onClick={() => onUpdateQuantity(item.quantity - 1)}
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          className={styles.quantityBtn}
          onClick={() => onUpdateQuantity(item.quantity + 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <p className={styles.cartItemPrice}>
        ${(item.price * item.quantity).toFixed(2)}
      </p>
      <button
        className={styles.removeBtn}
        onClick={onRemove}
        aria-label="Remove item"
      >
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default CartItem;
