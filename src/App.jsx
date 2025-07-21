import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./components/MainLayout";

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

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/category/:slug" element={<ProductListingPage />} />
        <Route path="/cart" element={<MyCartPage />} />
      </Route>
      <Route path="/account" element={<AccountPage />}>
        <Route index element={<Navigate to="details" replace />} />
        <Route path="details" element={<MyDetails />} />
        <Route path="orders" element={<MyOrders />} />
        <Route path="address-book" element={<MyAddressBook />} />
        <Route path="settings" element={<AccountSettings />} />
        <Route path="newsletters" element={<MyNewsletters />} />
      </Route>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
