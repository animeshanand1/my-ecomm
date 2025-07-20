import React, { useState } from 'react';
import styles from './AccountPage.module.css'; 

const MyNewsletters = () => {
  
  const [preferences, setPreferences] = useState({
    general: true,
    deals: true,
    newArrivals: false,
    styleGuides: true,
  });

  const [saveStatus, setSaveStatus] = useState('');

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === 'general' && !checked) {
      setPreferences({
        general: false,
        deals: false,
        newArrivals: false,
        styleGuides: false,
      });
    } else {
      setPreferences(prev => ({ ...prev, [name]: checked }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Saving newsletter preferences:', preferences);
    
    setSaveStatus('Preferences saved successfully!');
    
    setTimeout(() => {
      setSaveStatus('');
    }, 3000);
  };

  return (
    <div className={styles.contentSection}>
      <h2>My newsletters</h2>
      <p className={styles.pageDescription}>Manage your email subscriptions to stay up-to-date with our latest products, offers, and style tips.</p>

      <form onSubmit={handleSubmit}>
        <div className={styles.formSection}>
          <div className={styles.sectionInfo}>
            <h3>General Subscription</h3>
            <p>Use this master switch to subscribe or unsubscribe from all marketing emails.</p>
          </div>
          <div className={styles.sectionFields}>
            <div className={styles.checkboxField}>
              <input
                type="checkbox"
                id="general"
                name="general"
                checked={preferences.general}
                onChange={handleChange}
              />
              <label htmlFor="general">Subscribe to our general newsletter</label>
            </div>
          </div>
        </div>
        
        <hr className={styles.divider} />
        
        <div className={styles.formSection}>
          <div className={styles.sectionInfo}>
            <h3>Detailed Preferences</h3>
            <p>Choose the specific types of content you'd like to receive. This section is only active if you are subscribed generally.</p>
          </div>
          <div className={styles.sectionFields}>
            <div className={styles.checkboxField}>
              <input
                type="checkbox"
                id="deals"
                name="deals"
                checked={preferences.deals}
                onChange={handleChange}
                disabled={!preferences.general} 
              />
              <label htmlFor="deals">Weekly Deals & Promotions</label>
            </div>
            <div className={styles.checkboxField}>
              <input
                type="checkbox"
                id="newArrivals"
                name="newArrivals"
                checked={preferences.newArrivals}
                onChange={handleChange}
                disabled={!preferences.general}
              />
              <label htmlFor="newArrivals">New Product Arrivals</label>
            </div>
            <div className={styles.checkboxField}>
              <input
                type="checkbox"
                id="styleGuides"
                name="styleGuides"
                checked={preferences.styleGuides}
                onChange={handleChange}
                disabled={!preferences.general}
              />
              <label htmlFor="styleGuides">Style & Trend Guides</label>
            </div>
          </div>
        </div>

        <div className={styles.formActions}>
          <button type="submit" className={styles.saveButton}>Save Preferences</button>
          {saveStatus && <div className={styles.saveMessage}>{saveStatus}</div>}
        </div>
      </form>
    </div>
  );
};

export default MyNewsletters;