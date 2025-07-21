import React, { useState, useEffect } from 'react';
import styles from './OrderTracker.module.css';

const fullTrackingHistory = [
  { status: 'Order confirmed and processing', date: 'Oct 22, 2025, 10:00 AM', completed: true },
  { status: 'Shipped from origin facility', date: 'Oct 23, 2025, 5:00 PM', completed: true },
  { status: 'Arrived at local sorting facility', date: 'Oct 24, 2025, 11:15 PM', completed: true },
  { status: 'Out for delivery', date: 'Oct 25, 2025, 9:00 AM', completed: false },
  { status: 'Package delivered to front door', date: 'Oct 25, 2025, 2:30 PM', completed: false },
];

const initialOrderData = {
  orderId: 'N123456789',
  estimatedDelivery: 'October 26, 2025',
  shippingCarrier: 'FedEx',
  currentStatus: 'Order confirmed and processing', 
  products: [
    {
      id: 1,
      name: 'Classic Beige Trench Coat',
      quantity: 1,
      price: '$450.00',
      imageUrl: 'https://placehold.co/100x100/f0e6e0/333?text=Coat'
    },
    {
      id: 2,
      name: 'Leather Ankle Boots',
      quantity: 1,
      price: '$220.00',
      imageUrl: 'https://placehold.co/100x100/a38c7a/fff?text=Boots'
    }
  ],
  trackingHistory: fullTrackingHistory.map((item, index) => ({
    ...item,
    completed: index === 0,
  })),
};


const OrderTracker = () => {
  const [orderData, setOrderData] = useState(initialOrderData);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrderData(prevOrderData => {
        const nextStageIndex = prevOrderData.trackingHistory.findIndex(stage => !stage.completed);

        if (nextStageIndex === -1) {
          clearInterval(interval);
          return prevOrderData;
        }

        const newHistory = prevOrderData.trackingHistory.map((stage, index) => {
          if (index < nextStageIndex) {
            return { ...stage, completed: true };
          }
          return stage;
        });

        return {
          ...prevOrderData,
          currentStatus: newHistory[nextStageIndex - 1]?.status || initialOrderData.currentStatus,
          trackingHistory: newHistory,
        };
      });
    }, 3000); 

    return () => clearInterval(interval);
  }, []); 

  const trackingStages = orderData.trackingHistory;
  const activeIndex = trackingStages.findIndex(stage => !stage.completed);

  const getStageIcon = (status) => {
    if (/deliver(ed|y)/i.test(status) && !/front door/i.test(status)) return 'fa-solid fa-truck-fast';
    if (/front door|package delivered/i.test(status)) return 'fa-solid fa-check-circle';
    if (/processing|confirm/i.test(status)) return 'fa-solid fa-box-open';
    if (/shipped|origin facility/i.test(status)) return 'fa-solid fa-truck';
    if (/sorting facility/i.test(status)) return 'fa-solid fa-warehouse';
    return 'fa-solid fa-circle-dot';
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.trackerContainer}>
        
        <div className={styles.trackingHeader}>
          <h1>Order Tracking</h1>
          <div className={styles.progressBar}>
            {trackingStages.map((stage, index) => {
              const isCompleted = stage.completed;
           
              const isActive = index === activeIndex;
              return (
                <div key={stage.status} className={`${styles.stage} ${isCompleted ? styles.completed : ''} ${isActive ? styles.active : ''}`}>
                  <div className={styles.stageIconWrapper}>
                    <i className={getStageIcon(stage.status)}></i>
                  </div>
                  <p>{stage.status}</p>
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
                        <p className={styles.productPrice}>${product.price}</p>
                    </div>
                ))}
            </div>
          </div>

          <div className={styles.rightColumn}>
             <div className={`${styles.card} ${styles.mapCard}`}>
                <img src="https://placehold.co/600x400/e0e0e0/777?text=Live+Map+Placeholder" alt="Map" className={styles.mapImage} />
                <div className={styles.mapOverlay}>
                    <div className={styles.deliveryStatus}>
                        <i className="fa-solid fa-truck"></i>
                        
                        <span>{orderData.currentStatus}</span>
                    </div>
                    <a href="#" className={styles.liveTrackLink}>Live Track <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className={styles.card}>
                <h3>Tracking Updates</h3>
                <ul className={styles.trackingHistory}>
                    {orderData.trackingHistory.filter(item => item.completed).map((item, index) => (
                        <li key={index} className={styles.historyItem}>
                            <div className={styles.historyIcon}><i className="fa-solid fa-box"></i></div>
                            <div className={styles.historyDetails}>
                                <p>{item.status}</p>
                                <small style={{color:'black'}}>{item.date}</small>
                            </div>
                        </li>
                    )).reverse()} 
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