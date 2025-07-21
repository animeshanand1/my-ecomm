import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerColumn}>
            <h4>About Aura</h4>
            <p>Aura is your destination for curated products that blend style, quality, and affordability.</p>
          </div>
          <div className={styles.footerColumn}>
            <h4>Shop</h4>
            <ul>
              <li><a href="#">Men's</a></li>
              <li><a href="#">Women's</a></li>
              <li><a href="#">Electronics</a></li>
              <li><a href="#">Home Essentials</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Support</h4>
            <ul>
              <li><Link to='/contact-us'>Contact Us</Link></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>
          <div className={styles.footerColumn}>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2023 Aura. All Rights Reserved.</p>
          <div className={styles.socialIcons}>
            {/* Replace these with actual Icon Components */}
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter">TW</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;