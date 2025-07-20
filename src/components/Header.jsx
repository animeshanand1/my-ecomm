import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

import SearchIcon from "../assets/icons/SearchIcon";
import UserIcon from "../assets/icons/UserIcon";
import CartIcon from "../assets/icons/CartIcon";

const Header = () => {
  const cartItemCount = 3;

  return (
    <header className={styles.mainHeader}>
      <div className={`container ${styles.headerContainer}`}>
       
        <Link to="/" className={styles.logo}>
          Aura
        </Link>

     
        <div className={styles.searchBar}>
          <div className={styles.searchIcon}>
            <SearchIcon />
          </div>
          <input type="search" placeholder="Search for products..." />
        </div>

      
        <div className={styles.rightSection}>
       
          <nav className={styles.navLinks}>
            <ul>
              <li>
                <Link to="/category/men">Men</Link>
              </li>
              <li>
                <Link to="/category/women">Women</Link>
              </li>
              <li>
                <Link to="/category/kids">Kids</Link>
              </li>
              <li>
                <Link to="/category/sale">Sale</Link>
              </li>
            </ul>
          </nav>

          <div className={styles.navIcons}>
            <Link to="/account" aria-label="User Account">
              <UserIcon />
            </Link>
            <Link
              to="/cart"
              className={styles.cartIconContainer}
              aria-label="Shopping Cart"
            >
              <CartIcon />
              {cartItemCount > 0 && (
                <span className={styles.badge}>{cartItemCount}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;