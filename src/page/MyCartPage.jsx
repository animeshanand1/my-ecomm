import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './MyCartPage.module.css';
import OrderSummary from '../components/OrderSummary';
import CheckoutForm from '../components/CheckoutForm';
import {addItemToCart, removeItemFromCart} from '../features/cart/cartSlice';

const MyCartPage = () => {
  const dispatch = useDispatch();

  const { items, totalAmount } = useSelector(state => state.cart);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    const item = items.find(item => item.id === itemId);
    if (!item) return;

    if (newQuantity > item.quantity) {
      dispatch(addItemToCart(item)); 
    } else if (newQuantity < item.quantity) {
      dispatch(removeItemFromCart(itemId)); 
    }
  };

  const handleRemoveItem = (itemId) => {
    const item = items.find(item => item.id === itemId);
    if (!item) return;

    for (let i = 0; i < item.quantity; i++) {
      dispatch(removeItemFromCart(itemId));
    }
  };

  const subtotal = totalAmount;
  const delivery = 0; 
  const total = subtotal + delivery;

  if (items.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <h2>Your Cart is Empty</h2>
        <p>Add some items to your cart to continue shopping.</p>
      </div>
    );
  }

  return (
    <div className={styles.myCartPage}>
      <OrderSummary
        items={items}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
      <CheckoutForm
        subtotal={subtotal}
        delivery={delivery}
        total={total}
        itemCount={items.length}
      />
    </div>
  );
};

export default MyCartPage;
