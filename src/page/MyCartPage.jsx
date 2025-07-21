import React from 'react';
import styles from './MyCartPage.module.css';
import OrderSummary from '../components/OrderSummary';
import CheckoutForm from '../components/CheckoutForm';

const cartItemsData = [
  { id: 1, name: 'Red T-Shirt', size: 'M', price: 60.00, quantity: 2, image: 'https://i.imgur.com/example-red.png' },
  { id: 2, name: 'Green T-Shirt', size: 'M', price: 120.00, quantity: 1, image: 'https://i.imgur.com/example-green.png' },
  { id: 3, name: 'Blue T-Shirt', size: 'M', price: 60.00, quantity: 2, image: 'https://i.imgur.com/example-blue.png' },
];

const MyCartPage = () => {
  return (
    <div className={styles.myCartPage}>
      <OrderSummary items={cartItemsData} />
      <CheckoutForm />
    </div>
  );
};

export default MyCartPage;