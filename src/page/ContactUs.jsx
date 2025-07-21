import React from 'react';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted! (This is a demo)');
  };

  return (
    <div className={styles.contactContainer}>

      <div className={styles.leftPanel}>
        <div className={styles.infoOverlay}>
          <h1>We're Here to Help!</h1>
          <p>Get in touch with us for any inquiries. We are happy to help you.</p>
        </div>
      </div>

      <div className={styles.formPanel}>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          
          <div className={styles.formGroup}>
            <input type="text" id="name" name="name" required placeholder=" " />
            <label htmlFor="name">Name</label>
          </div>

          <div className={styles.formGroup}>
            <input type="email" id="email" name="email" required placeholder=" " />
            <label htmlFor="email">Email</label>
          </div>

          <div className={styles.formGroup}>
            <input type="text" id="subject" name="subject" required placeholder=" " />
            <label htmlFor="subject">Subject</label>
          </div>

          <div className={styles.formGroup}>
            <textarea id="message" name="message" rows="4" required placeholder=" "></textarea>
            <label htmlFor="message">Message</label>
          </div>

          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>

        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <i className="fas fa-envelope" style={{ color: '#4a5568', marginRight: '8px' }}></i>
            <span>Support@ecomstore.com</span>
          </div>
          <div className={styles.contactItem}>
            <i className="fas fa-phone" style={{ color: '#4a5568', marginRight: '8px' }}></i>
            <span>1234567890</span>
          </div>
          <div className={styles.contactItem}>
            <i className="fas fa-map-marker-alt" style={{ color: '#4a5568', marginRight: '8px' }}></i>
            <span>Sector 55,Gurugram,Haryana,India</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactUs;