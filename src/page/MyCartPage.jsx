import React, { useState } from 'react';
import styles from './MyCartPage.module.css';
import OrderSummary from '../components/OrderSummary';
import CheckoutForm from '../components/CheckoutForm';

const MyCartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Red T-Shirt', size: 'M', price: 60.00, quantity: 2, image: 'https://images.unsplash.com/photo-1575737132307-1fad104f1f67?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVkJTIwdHNoaXJ0fGVufDB8fDB8fHww' },
    { id: 2, name: 'Red T-Shirt', size: 'M', price: 120.00, quantity: 1, image: 'https://images.unsplash.com/photo-1551304110-1487f449c468?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVkJTIwdHNoaXJ0fGVufDB8fDB8fHww' },
    { id: 3, name: 'Blue T-Shirt', size: 'M', price: 60.00, quantity: 2, image: 'https://plus.unsplash.com/premium_photo-1682096261732-88a83f8bb20b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D' },
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