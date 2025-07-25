import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import ProtectedRoute from "./components/PortectedRoute";

import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import HomePage from "./page/Homepage";
import ProductListingPage from "./components/product-listing/ProductListingPage";
import MyDetails from "./components/account/MyDetails";
import AccountPage from "./components/account/AccountPage";
import MyAddressBook from "./components/account/MyAddressBook";
import AccountSettings from "./components/account/AccountSettings";
import MyOrders from "./components/account/MyOrders";
import MyNewsletters from "./components/account/MyNewsletters";
import MyCartPage from "./page/MyCartPage";
import ProductDetailPage from "./page/ProductDetailPage";
import ContactUs from "./page/ContactUs";
import OrderTracker from "./page/OrderTracker";
import { useDispatch } from "react-redux";
import { fetchUserProfile } from "./features/user/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      
      dispatch(fetchUserProfile());
    }
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/category/:slug" element={<ProductListingPage />} />
        <Route path="/cart" element={<MyCartPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/track-order" element={<OrderTracker />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="/account" element={<AccountPage />}>
          <Route index element={<Navigate to="details" replace />} />
          <Route path="details" element={<MyDetails />} />
          <Route path="orders" element={<MyOrders />} />
          <Route path="address-book" element={<MyAddressBook />} />
          <Route path="settings" element={<AccountSettings />} />
          <Route path="newsletters" element={<MyNewsletters />} />
        </Route>
      </Route>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
