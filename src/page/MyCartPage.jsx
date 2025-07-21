import React, { useState } from 'react';
import styles from './MyCartPage.module.css';
import OrderSummary from '../components/OrderSummary';
import CheckoutForm from '../components/CheckoutForm';

const MyCartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Red T-Shirt', size: 'M', price: 60.00, quantity: 2, image: 'https://i.imgur.com/example-red.png' },
    { id: 2, name: 'Green T-Shirt', size: 'M', price: 120.00, quantity: 1, image: 'https://i.imgur.com/example-green.png' },
    { id: 3, name: 'Blue T-Shirt', size: 'M', price: 60.00, quantity: 2, image: 'https://i.imgur.com/example-blue.png' },
  ]);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const subtotal = calculateTotal();
  const delivery = 0; // Free delivery
  const total = subtotal + delivery;

  if (cartItems.length === 0) {
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
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
      <CheckoutForm 
        subtotal={subtotal}
        delivery={delivery}
        total={total}
        itemCount={cartItems.length}
      />
    </div>
  );
};

export default MyCartPage;