import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Autumn Collection is Here</h1>
        <p>Discover cozy styles and warm essentials for the new season. Unbeatable prices, unforgettable quality.</p>
        <Link to="/products" className={styles.ctaButton}>Shop Now</Link>
      </div>
    </section>
  );
};

export default HeroSection;
