import React from 'react';
import styles from './NewsletterSection.module.css';

const NewsletterSection = () => {
  return (
    <section id="newsletter" className={styles.newsletterSection}>
      <div className="container">
        <h2>Stay in the Loop</h2>
        <p>Sign up for our newsletter to get exclusive deals and the latest news.</p>
        <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email address" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;