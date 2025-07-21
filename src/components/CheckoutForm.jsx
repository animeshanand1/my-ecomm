import React, { useState } from 'react';
import styles from './CheckoutForm.module.css';

const CheckoutForm = ({ subtotal, delivery, total, itemCount }) => {
  const [formData, setFormData] = useState({
    city: '',
    promo: '',
    address: '',
    payment: 'card',
    phone: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    console.log('Order submitted:', {
      items: { subtotal, delivery, total, itemCount },
      customerDetails: formData
    });
    alert('Order placed successfully!');
  };

  return (
    <div className={styles.checkoutFormContainer}>
      <div className={styles.checkoutHeader}>
        <h2>Shopping Cart</h2>
        <span>{itemCount} {itemCount === 1 ? 'Item' : 'Items'}</span>
      </div>

      <div className={styles.priceSummary}>
        <div className={styles.priceRow}>
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className={styles.priceRow}>
          <span>Delivery:</span>
          <span>${delivery.toFixed(2)}</span>
        </div>
        <div className={`${styles.priceRow} ${styles.totalRow}`}>
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <form className={styles.checkoutForm} onSubmit={handleSubmit}>
        <div className={styles.formGroupRow}>
          <div className={styles.formGroup}>
            <label htmlFor="city">City</label>
            <input 
              type="text" 
              id="city" 
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="promo">Promo Code</label>
            <input 
              type="text" 
              id="promo" 
              value={formData.promo}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            id="address" 
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Payment</label>
          <div className={styles.paymentOption}>
            <input 
              type="radio" 
              id="delivery" 
              name="payment" 
              value="delivery"
              checked={formData.payment === 'delivery'}
              onChange={() => setFormData(prev => ({ ...prev, payment: 'delivery' }))}
            />
            <label htmlFor="delivery">Payment on Delivery</label>
          </div>
          <div className={styles.paymentOption}>
            <input 
              type="radio" 
              id="card" 
              name="payment" 
              value="card"
              checked={formData.payment === 'card'}
              onChange={() => setFormData(prev => ({ ...prev, payment: 'card' }))}
            />
            <label htmlFor="card">Card Payment</label>
          </div>
          <div className={styles.paymentOption}>
            <input 
              type="radio" 
              id="paypal" 
              name="payment" 
              value="paypal"
              checked={formData.payment === 'paypal'}
              onChange={() => setFormData(prev => ({ ...prev, payment: 'paypal' }))}
            />
            <label htmlFor="paypal">PayPal Payment</label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9+\s-]+"
          />
        </div>

        {formData.payment === 'card' && (
          <div className={styles.formGroupRow}>
            <div className={styles.formGroup}>
              <label htmlFor="expiry">Expiry Date</label>
              <input 
                type="text" 
                id="expiry" 
                value={formData.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                required
                pattern="\d{2}/\d{2}"
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="cvv">CVV</label>
              <input 
                type="text" 
                id="cvv" 
                value={formData.cvv}
                onChange={handleChange}
                required
                pattern="\d{3,4}"
                maxLength="4"
              />
            </div>
          </div>
        )}
        
        <div className={styles.actionButtons}>
          <button type="button" className={styles.btnCancel}>Cancel</button>
          <button type="submit" className={styles.btnOrder}>Place Order</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;