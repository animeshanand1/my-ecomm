import React, { useState } from 'react';
import styles from './AccountPage.module.css'; 

const FormField = ({ label, name, type = 'text', value, onChange, placeholder, hint }) => (
  <div className={styles.formField}>
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    {hint && <small className={styles.hint}>{hint}</small>}
  </div>
);

const MyDetails = () => {
  const [formData, setFormData] = useState({
    firstName: 'Mateusz',
    secondName: 'Wierzbicki',
    birthDate: '',
    phone: '123456789',
    email: 'email@example.pl',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saving personal information:', formData);
    alert('Details saved!');
  };

  return (
    <div className={styles.contentSection}>
      <h2>My details</h2>
      <form onSubmit={handleSubmit}>
       
        <div className={styles.formSection}>
          <div className={styles.sectionInfo}>
            <h3>Personal Information</h3>
            <p>Assertively utilize adaptive customer service for future-proof platforms. Completely drive optimal markets.</p>
          </div>
          <div className={styles.sectionFields}>
            <div className={styles.row}>
              <FormField label="FIRST NAME" name="firstName" value={formData.firstName} onChange={handleChange} />
              <FormField label="SECOND NAME" name="secondName" value={formData.secondName} onChange={handleChange} />
            </div>
            <FormField label="BIRTH DATE" name="birthDate" value={formData.birthDate} onChange={handleChange} placeholder="dd/mm/yy" />
            <FormField label="PHONE NUMBER" name="phone" value={formData.phone} onChange={handleChange} hint="Keep 9-digit format with no spaces and dashes." />
            <button type="submit" className={styles.saveButton}>SAVE</button>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.formSection}>
          <div className={styles.sectionInfo}>
            <h3>E-mail address</h3>
            <p>Assertively utilize adaptive customer service for future-proof platforms. Completely drive optimal markets.</p>
          </div>
          <div className={styles.sectionFields}>
            <FormField label="E-MAIL ADDRESS" name="email" type="email" value={formData.email} onChange={handleChange} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyDetails;