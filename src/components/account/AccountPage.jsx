import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './AccountPage.module.css';

const AccountSidebar = ({ isSidebarOpen, closeSidebar }) => {
  
  const navItems = [
    { to: '/account/details',      icon: 'fa-solid fa-user-circle', text: 'My details' },
    { to: '/account/address-book', icon: 'fa-solid fa-map-location-dot', text: 'My address book' },
    { to: '/account/orders',       icon: 'fa-solid fa-box-archive', text: 'My orders' },
    { to: '/account/newsletters',  icon: 'fa-solid fa-envelope-open-text', text: 'My newsletters' },
    { to: '/account/settings',     icon: 'fa-solid fa-gears', text: 'Account settings' },
  ];

  return (
    <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.showSidebar : ''}`}>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink 
                to={item.to} 
                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}
                onClick={closeSidebar}
              >
                <i className={`${item.icon} ${styles.icon}`}></i>
                <span>{item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

const AccountPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`container ${styles.accountPageWrapper}`}>
      <div className={styles.accountHeader}>
        <h1 className={styles.mainTitle}>My Account</h1>
        
        <button 
          className={styles.mobileMenuButton} 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          aria-label="Toggle menu"
        >
          <i className={isSidebarOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'}></i>
        </button>
      </div>
      
      <div className={styles.layout}>
        {isSidebarOpen && <div className={styles.sidebarOverlay} onClick={() => setIsSidebarOpen(false)}></div>}
        
        <AccountSidebar 
          isSidebarOpen={isSidebarOpen} 
          closeSidebar={() => setIsSidebarOpen(false)} 
        />
        
        <main className={styles.mainContent}>
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default AccountPage;