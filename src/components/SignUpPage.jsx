import React, { useState } from 'react';
import styles from './SignUpPage.module.css';

import EyeIcon from '../assets/icons/EyeIcon';
import GoogleIcon from '../assets/icons/GoogleIcon';
import AppleIcon from '../assets/icons/AppleIcon';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: 'Animesh',
    lastName: 'Thakur',
    email: '',
    password: '',
    agreed: true,
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
    console.log('Form Submitted:', formData);
    
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
            <h2>Capturing Moments, Creating Memories</h2>
            <div className={styles.paginationDots}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={`${styles.dot} ${styles.active}`}></span>
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className={styles.formPanel}>
          <h1>Create an account</h1>
          <p className={styles.loginPrompt}>
            Already have an account? <a href="/login">Log in</a>
          </p>

          <form onSubmit={handleSubmit}>
            <div className={styles.nameFields}>
              <div className={styles.inputGroup}>
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

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
                    >
                        <EyeIcon />
                    </button>
                </div>
            </div>


            <div className={styles.termsCheckbox}>
              <input
                type="checkbox"
                id="agreed"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
              />
              <label htmlFor="agreed">
                I agree to the <a href="/terms">Terms & Conditions</a>
              </label>
            </div>

            <button type="submit" className={styles.createAccountButton}>
              Create account
            </button>
          </form>

          <div className={styles.divider}>
            <span>Or register with</span>
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

export default SignUpPage;