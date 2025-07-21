import React from 'react';
import CartItem from './CartItem';
import styles from './OrderSummary.module.css';

const OrderSummary = ({ items }) => {
  return (
    <div className={styles.orderSummaryContainer}>
      <h2>Order Summary</h2>
      <div> 
        {items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <button className={styles.couponBtn}>Add Coupon Code →</button>
    </div>
  );
};

export default OrderSummary;