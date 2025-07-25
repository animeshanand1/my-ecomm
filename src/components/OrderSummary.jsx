import React from 'react';
import CartItem from './CartItem';
import styles from './OrderSummary.module.css';
import {useSelector} from 'react-redux';

const OrderSummary = ({ items, onUpdateQuantity, onRemoveItem }) => {

  const item=useSelector((state) => state.cart);
  console.log('Cart items:', item.items);
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
      
    </div>
  );
};

export default OrderSummary;