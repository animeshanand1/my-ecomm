import React, { useState } from 'react';
import styles from './SignUpPage.module.css';

import EyeIcon from '../assets/icons/EyeIcon';
import GoogleIcon from '../assets/icons/GoogleIcon';
import AppleIcon from '../assets/icons/AppleIcon';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Form Submitted:', formData);
    // Add login logic here
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.wrapper}>
        {/* Left Image Panel */}
        <div className={styles.imagePanel}>
          <div className={styles.imageHeader}>
            <span className={styles.logo}>AMU</span>
            <a href="/" className={styles.backButton}>
              Back to website &rarr;
            </a>
          </div>
          <div className={styles.imageFooter}>
            <h2>Welcome Back to Aura</h2>
            <div className={styles.paginationDots}>
              <span className={styles.dot}></span>
              <span className={`${styles.dot} ${styles.active}`}></span>
              <span className={styles.dot}></span>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className={styles.formPanel}>
          <h1>Log in to your account</h1>
          <p className={styles.loginPrompt}>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>

          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className={styles.eyeButton}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <EyeIcon />
                </button>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div className={styles.termsCheckbox} style={{ marginBottom: 0 }}>
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="/forgot-password" style={{ color: 'var(--accent-purple)', fontSize: '0.95rem', textDecoration: 'none' }}>Forgot password?</a>
            </div>
            <button type="submit" className={styles.createAccountButton}>
              Log in
            </button>
          </form>

          <div className={styles.divider}>
            <span>Or log in with</span>
          </div>

          <div className={styles.socialLogin}>
            <button className={styles.socialButton}>
              <GoogleIcon /> Google
            </button>
            <button className={styles.socialButton}>
              <AppleIcon /> Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 