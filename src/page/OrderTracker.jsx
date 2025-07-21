import React, { useState } from 'react';
import styles from './OrderTracker.module.css';

const initialOrderData = {
  orderId: 'N123456789',
  estimatedDelivery: 'October 26, 2025',
  shippingCarrier: 'FedEx',
  currentStatus: 'Out for Delivery',
  products: [
    {
      id: 1,
      name: 'Classic Beige Trench Coat',
      quantity: 1,
      price: '4450.00',
      imageUrl: 'https://placehold.co/100x100/f0e6e0/333?text=Coat'
    },
    {
      id: 2,
      name: 'Leather Ankle Boots',
      quantity: 1,
      price: '2220.00',
      imageUrl: 'https://placehold.co/100x100/a38c7a/fff?text=Boots'
    }
  ],
  trackingHistory: [
    { status: 'Package delivered to front door', date: 'Oct 25, 2025, 2:30 PM', completed: true },
    { status: 'Out for delivery', date: 'Oct 25, 2025, 9:00 AM', completed: true },
    { status: 'Arrived at local sorting facility', date: 'Oct 24, 2025, 11:15 PM', completed: true },
    { status: 'Shipped from origin facility', date: 'Oct 23, 2025, 5:00 PM', completed: true },
    { status: 'Order confirmed and processing', date: 'Oct 22, 2025, 10:00 AM', completed: true },
  ]
};

const OrderTracker = () => {
  const [orderData] = useState(initialOrderData);

  const trackingStages = ['Processing', 'Shipped', 'Out for Delivery', 'Delivered'];
  const currentStageIndex = trackingStages.indexOf(orderData.currentStatus);

  const stageIcons = {
    'Processing': 'fa-solid fa-box-open',
    'Shipped': 'fa-solid fa-truck-fast',
    'Out for Delivery': 'fa-solid fa-house-chimney-user',
    'Delivered': 'fa-solid fa-check-circle'
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.trackerContainer}>

       <div className={styles.trackingHeader}>
          <h1>Order Tracking</h1>
          <div className={styles.progressBar}>
            {trackingStages.map((stage, index) => {
              const isCompleted = index <= currentStageIndex;
              const isActive = index === currentStageIndex;
              return (
                <div key={stage} className={`${styles.stage} ${isCompleted ? styles.completed : ''} ${isActive ? styles.active : ''}`}>
                  <div className={styles.stageIconWrapper}>
                    <i className={stageIcons[stage]}></i>
                  </div>
                  <p>{stage}</p>
                </div>
              );
            })}
          </div>
        </div>

        <main className={styles.mainGrid}>

          <div className={styles.leftColumn}>
            <div className={styles.card}>
              <h3>Order Summary</h3>
              <div className={styles.summaryItem}>
                <span>Order #</span>
                <strong>{orderData.orderId}</strong>
              </div>
              <div className={styles.summaryItem}>
                <span>Estimated Delivery</span>
                <strong>{orderData.estimatedDelivery}</strong>
              </div>
              <div className={styles.summaryItem}>
                <span>Shipping Carrier</span>
                <strong className={styles.carrier}>{orderData.shippingCarrier}</strong>
              </div>
            </div>
            <div className={styles.card}>
                <h3>Items in Your Order</h3>
                {orderData.products.map(product => (
                    <div key={product.id} className={styles.productItem}>
                        <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
                        <div className={styles.productDetails}>
                            <p className={styles.productName}>{product.name}</p>
                            <p className={styles.productQty}>Qty: {product.quantity}</p>
                        </div>
                        <p className={styles.productPrice}>{product.price}</p>
                    </div>
                ))}
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
             <div className={`${styles.card} ${styles.mapCard}`}>
                <img src="https://placehold.co/600x400/e0e0e0/777?text=Live+Map+Placeholder" alt="Map" className={styles.mapImage} />
                <div className={styles.mapOverlay}>
                    <div className={styles.deliveryStatus}>
                        <i className="fa-solid fa-truck"></i>
                        <span>Out for Delivery</span>
                    </div>
                    <a href="#" className={styles.liveTrackLink}>Live Track <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className={styles.card}>
                <h3>Tracking Updates</h3>
                <ul className={styles.trackingHistory}>
                    {orderData.trackingHistory.map((item, index) => (
                        <li key={index} className={styles.historyItem}>
                            <div className={styles.historyIcon}><i className="fa-solid fa-box"></i></div>
                            <div className={styles.historyDetails}>
                                <p>{item.status}</p>
                                <small style={{color:'black'}}>{item.date}</small>
                            </div>
                        </li>
                    ))}
                </ul>
                 <button className={styles.supportButton}>Contact Support</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default OrderTracker;