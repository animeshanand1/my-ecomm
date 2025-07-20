import React, { useState } from 'react';
import styles from './AccountPage.module.css';

const initialDummyOrders = [
  { 
    id: '987654', date: '2023-10-25', status: 'Shipped', total: 1400.00,
    shippingAddress: '123 Main Street, Anytown, USA 12345',
    paymentMethod: 'Visa **** 4242',
    items: [
      { id: 1, name: 'Rugged Denim Jeans', price: 850.00, quantity: 1, imageUrl: 'https://images.unsplash.com/photo-1602293589930-4535a9a7c6e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=60' },
      { id: 2, name: 'Classic Cotton Tee', price: 550.00, quantity: 1, imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=60' }
    ]
  },
  { 
    id: '987123', date: '2023-10-15', status: 'Processing', total: 450.00, 
    shippingAddress: '123 Main Street, Anytown, USA 12345',
    paymentMethod: 'Visa **** 4242',
    items: [
      { id: 3, name: 'Silk Blend Scarf', price: 450.00, quantity: 1, imageUrl: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=60' }
    ]
  },
  { 
    id: '986555', date: '2023-09-30', status: 'Cancelled', total: 850.00,
    shippingAddress: '456 Business Blvd, Suite 100, Workville, USA 54321',
    paymentMethod: 'Mastercard **** 5555',
    items: [
      { id: 1, name: 'Rugged Denim Jeans', price: 850.00, quantity: 1, imageUrl: 'https://images.unsplash.com/photo-1602293589930-4535a9a7c6e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=60' }
    ]
  },
];

const MyOrders = () => {
  
  const [orders, setOrders] = useState(initialDummyOrders);
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const handleToggleDetails = (orderId) => {
    setExpandedOrderId(prevId => (prevId === orderId ? null : orderId));
  };

  const handleCancelOrder = (orderId) => {
    
    if (window.confirm('Are you sure you want to cancel this order?')) {
      setOrders(prevOrders => 
        prevOrders.map(order => 
          order.id === orderId 
            ? { ...order, status: 'Cancelled' } 
            : order 
        )
      );
    }
  };
  
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'shipped': return styles.statusShipped;
      case 'processing': return styles.statusProcessing;
      case 'cancelled': return styles.statusCancelled;
      default: return '';
    }
  };

  return (
    <div className={styles.contentSection}>
      <h2>My Orders</h2>
      <div className={styles.orderList}>
        {orders.length > 0 ? (
          orders.map(order => (
            <React.Fragment key={order.id}>
              <div className={styles.orderItem}>
                <div className={styles.orderInfo}>
                  <h4>Order #{order.id}</h4>
                  <p>Date: {order.date}</p>
                </div>
                <div className={styles.orderStatus}>
                  <p>Total: {order.total.toFixed(2)} INR</p>
                  <span className={`${styles.statusBadge} ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </div>
                <div className={styles.orderActions}>
                  <button 
                    onClick={() => handleToggleDetails(order.id)} 
                    className={styles.viewDetailsButton}
                  >
                    {expandedOrderId === order.id ? 'Hide Details' : 'View Details'}
                  </button>
                  {order.status.toLowerCase() === 'processing' && (
                    <button 
                      onClick={() => handleCancelOrder(order.id)}
                      className={styles.cancelButton}
                    >
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>
              
              {expandedOrderId === order.id && <OrderDetails order={order} />}
            </React.Fragment>
          ))
        ) : (
          <p>You have not placed any orders yet.</p>
        )}
      </div>
    </div>
  );
};

const OrderDetails = ({ order }) => {
  return (
    <div className={styles.orderDetailsContainer}>
      <div className={styles.orderItemsList}>
        <h4>Items in this order</h4>
        {order.items.map(item => (
          <div key={item.id} className={styles.orderItemDetail}>
            <img src={item.imageUrl} alt={item.name} className={styles.itemImage} />
            <div className={styles.itemName}>
              <span>{item.name}</span>
              <small>Qty: {item.quantity}</small>
            </div>
            <div className={styles.itemPrice}>
              {(item.price * item.quantity).toFixed(2)} INR
            </div>
          </div>
        ))}
      </div>
      <div className={styles.addressDetails}>
        <div>
          <h4>Shipping Address</h4>
          <p>{order.shippingAddress}</p>
        </div>
        <div>
          <h4>Payment Method</h4>
          <p>{order.paymentMethod}</p>
        </div>
      </div>
    </div>
  );
};


export default MyOrders;