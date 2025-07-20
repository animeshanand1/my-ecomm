import React, { useState } from 'react';
import styles from './AccountPage.module.css';

const AccountSettings = () => {
  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
  const [preferences, setPreferences] = useState({ newsletter: true, promotions: false });

  const handlePasswordChange = (e) => {
    setPasswords(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const handlePreferenceChange = (e) => {
    setPreferences(prev => ({...prev, [e.target.name]: e.target.checked }));
  };

  return (
    <div className={styles.contentSection}>
      <h2>Account settings</h2>
      
      {/* Change Password Section */}
      <div className={styles.formSection}>
        <div className={styles.sectionInfo}>
          <h3>Change Password</h3>
          <p>For your security, we recommend choosing a password you don't use on any other site.</p>
        </div>
        <div className={styles.sectionFields}>
          <div className={styles.formField}>
            <label htmlFor="current">CURRENT PASSWORD</label>
            <input type="password" id="current" name="current" onChange={handlePasswordChange} />
          </div>
          <div className={styles.formField}>
            <label htmlFor="new">NEW PASSWORD</label>
            <input type="password" id="new" name="new" onChange={handlePasswordChange} />
          </div>
          <div className={styles.formField}>
            <label htmlFor="confirm">CONFIRM NEW PASSWORD</label>
            <input type="password" id="confirm" name="confirm" onChange={handlePasswordChange} />
          </div>
          <button className={styles.saveButton}>Change Password</button>
        </div>
      </div>
      
      <hr className={styles.divider} />
      
      {/* Marketing Preferences Section */}
      <div className={styles.formSection}>
        <div className={styles.sectionInfo}>
          <h3>Marketing Preferences</h3>
          <p>Decide what you want to be notified about.</p>
        </div>
        <div className={styles.sectionFields}>
          <div className={styles.checkboxField}>
            <input type="checkbox" id="newsletter" name="newsletter" checked={preferences.newsletter} onChange={handlePreferenceChange} />
            <label htmlFor="newsletter">Receive our weekly newsletter.</label>
          </div>
          <div className={styles.checkboxField}>
            <input type="checkbox" id="promotions" name="promotions" checked={preferences.promotions} onChange={handlePreferenceChange} />
            <label htmlFor="promotions">Receive promotional offers and discounts.</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;