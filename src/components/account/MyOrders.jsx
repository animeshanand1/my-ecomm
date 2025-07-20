import React from 'react';
import styles from './AccountPage.module.css'; 

const dummyOrders = [
  { id: '987654', date: '2023-10-25', status: 'Shipped', total: 110.00 },
  { id: '987123', date: '2023-10-15', status: 'Processing', total: 45.00 },
  { id: '986555', date: '2023-09-30', status: 'Cancelled', total: 85.00 },
  { id: '986401', date: '2023-09-12', status: 'Shipped', total: 180.00 },
];

const getStatusClass = (status) => {
  switch (status.toLowerCase()) {
    case 'shipped': return styles.statusShipped;
    case 'processing': return styles.statusProcessing;
    case 'cancelled': return styles.statusCancelled;
    default: return '';
  }
};

const MyOrders = () => {
  return (
    <div className={styles.contentSection}>
      <h2>My Orders</h2>
      <div className={styles.orderList}>
        {dummyOrders.length > 0 ? (
          dummyOrders.map(order => (
            <div key={order.id} className={styles.orderItem}>
              <div className={styles.orderInfo}>
                <h4>Order #{order.id}</h4>
                <p>Date: {order.date}</p>
              </div>
              <div className={styles.orderStatus}>
                <p>Total: ${order.total.toFixed(2)}</p>
                <span className={`${styles.statusBadge} ${getStatusClass(order.status)}`}>
                  {order.status}
                </span>
              </div>
              <button className={styles.viewDetailsButton}>View Details</button>
            </div>
          ))
        ) : (
          <p>You have not placed any orders yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyOrders;