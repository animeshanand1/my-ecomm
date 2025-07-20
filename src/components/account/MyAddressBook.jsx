import React, { useState, useEffect } from 'react';
import styles from './AccountPage.module.css';

const AddressFormModal = ({ isOpen, onClose, onSave, address }) => {
 
  const [formData, setFormData] = useState({ label: '', address: '' });

  useEffect(() => {
    if (address) {
      setFormData({ label: address.label, address: address.address, id: address.id });
    } else {
      setFormData({ label: '', address: '' }); 
    }
  }, [address, isOpen]); 

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3>{address ? 'Edit Address' : 'Add New Address'}</h3>
          <button onClick={onClose} className={styles.closeModalButton}>&times;</button>
        </div>
        <form onSubmit={handleSubmit} className={styles.modalBody}>
          <div className={styles.formField}>
            <label htmlFor="label">Label (e.g., Home, Work)</label>
            <input
              type="text"
              id="label"
              name="label"
              value={formData.label}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className={styles.modalFooter}>
            <button type="button" onClick={onClose} className={styles.cancelButton}>Cancel</button>
            <button type="submit" className={styles.saveButton}>Save Address</button>
          </div>
        </form>
      </div>
    </div>
  );
};


const dummyAddresses = [
  { id: 1, label: 'Primary', address: 'JC road no 7,Lalpur, Ranchi,Jharkhand' },
  { id: 2, label: 'Work', address: '6th floor,Premimum Suite Building,JUPMI Building,Dhurwa (Ranchi),Jharkhand' },
];

const MyAddressBook = () => {
  const [addresses, setAddresses] = useState(dummyAddresses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null); 

  const handleOpenAddModal = () => {
    setCurrentAddress(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (address) => {
    setCurrentAddress(address);
    setIsModalOpen(true);
  };

  const handleDelete = (addressId) => {
    if (window.confirm('Are you sure you want to delete this address?')) {
      setAddresses(prevAddresses => prevAddresses.filter(addr => addr.id !== addressId));
    }
  };

  const handleSaveAddress = (addressData) => {
    if (addressData.id) {
      
      setAddresses(prevAddresses => 
        prevAddresses.map(addr => (addr.id === addressData.id ? addressData : addr))
      );
    } else {
      
      setAddresses(prevAddresses => [
        ...prevAddresses,
        { ...addressData, id: Date.now() } 
      ]);
    }
    setIsModalOpen(false); 
  };

  return (
    <div className={styles.contentSection}>
      <div className={styles.addressHeader}>
        <h2>My address book</h2>
        <button onClick={handleOpenAddModal} className={styles.addNewAddressButton}>+ Add New Address</button>
      </div>
      <div className={styles.addressGrid}>
        {addresses.map(addr => (
          <div key={addr.id} className={styles.addressCard}>
            <h4>{addr.label}</h4>
            <p>{addr.address}</p>
            <div className={styles.cardActions}>
              <button onClick={() => handleOpenEditModal(addr)} className={styles.editButton}>Edit</button>
              <button onClick={() => handleDelete(addr.id)} className={styles.deleteButton}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      
      <AddressFormModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveAddress}
        address={currentAddress}
      />
    </div>
  );
};

export default MyAddressBook;