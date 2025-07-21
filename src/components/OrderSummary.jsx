import React from 'react';
import CartItem from './CartItem';
import styles from './OrderSummary.module.css';

const OrderSummary = ({ items, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div className={styles.orderSummaryContainer}>
      <h2>Order Summary</h2>
      <div className={styles.cartItems}> 
        {items.map(item => (
          <CartItem 
            key={item.id} 
            item={item} 
            onUpdateQuantity={(newQuantity) => onUpdateQuantity(item.id, newQuantity)}
            onRemove={() => onRemoveItem(item.id)}
          />
        ))}
      </div>
      <button className={styles.couponBtn}>Add Coupon Code →</button>
    </div>
  );
};

export default OrderSummary;