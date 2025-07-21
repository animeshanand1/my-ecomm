import React from 'react';
import styles from './CheckoutForm.module.css';

const CheckoutForm = () => {
  return (
    <div className={styles.checkoutFormContainer}>
      <div className={styles.checkoutHeader}>
        <h2>Shopping Cart</h2>
        <span>3 Items</span>
      </div>

      <div className={styles.priceSummary}>
        <div className={styles.priceRow}>
          <span>Subtotal:</span>
          <span>$360.00</span>
        </div>
        <div className={styles.priceRow}>
          <span>Delivery:</span>
          <span>$0</span>
        </div>
        <div className={`${styles.priceRow} ${styles.totalRow}`}>
          <span>Total:</span>
          <span>$360.00</span>
        </div>
      </div>

      <form className={styles.checkoutForm}>
        <div className={styles.formGroupRow}>
          <div className={styles.formGroup}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" defaultValue="Rajkot" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="promo">Promo Code</label>
            <input type="text" id="promo" defaultValue="Nov 01, 2023" />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" defaultValue="Alpha Plus, Near Rajya Telephone exchange." />
        </div>

        <div className={styles.formGroup}>
            <label>Payment</label>
            <div className={styles.paymentOption}>
                <input type="radio" id="delivery" name="payment" value="delivery" />
                <label htmlFor="delivery">Payment Delivery</label>
            </div>
             <div className={styles.paymentOption}>
                <input type="radio" id="card" name="payment" value="card" defaultChecked />
                <label htmlFor="card">Card Payment</label>
            </div>
             <div className={styles.paymentOption}>
                <input type="radio" id="paypal" name="payment" value="paypal" />
                <label htmlFor="paypal">PayPal Payment</label>
            </div>
        </div>

        <div className={styles.formGroup}>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" defaultValue="+91 000 000 0000" />
        </div>

        <div className={styles.formGroupRow}>
            <div className={styles.formGroup}>
                <label htmlFor="expiry">Expiry Date</label>
                <input type="text" id="expiry" defaultValue="Dec, 2025" />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" defaultValue="Rajkot" />
            </div>
        </div>
        
        <div className={styles.actionButtons}>
          <button type="button" className={styles.btnCancel}>Cancel</button>
          <button type="submit" className={styles.btnOrder}>Order</button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;