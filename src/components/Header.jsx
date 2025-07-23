import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import SearchIcon from "../assets/icons/SearchIcon";
import UserIcon from "../assets/icons/UserIcon";
import CartIcon from "../assets/icons/CartIcon";

const Header = () => {
  const cartItemCount = useSelector((state) => state.cart.totalQuantity);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

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
            <div className={styles.userAccount}>
              {isAuthenticated ? (
                <>
                  <UserIcon />
                  <div className={styles.dropdownContent}>
                    <div className={styles.dropdownHeader}>Hi, {user?.firstName || 'User'}</div>
                    <Link to="/account">My Account</Link>
                    <button onClick={handleLogout} className={styles.logoutButton}>Logout</button>
                  </div>
                </>
              ) : (
                <Link to="/login" aria-label="Login or Sign up">
                  <UserIcon />
                </Link>
              )}
            </div>
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
