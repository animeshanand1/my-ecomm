import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./components/MainLayout";

import SignUpPage from "./components/SignUpPage";
import HomePage from "./page/Homepage";
import ProductListingPage from "./components/product-listing/ProductListingPage";
import MyDetails from "./components/account/MyDetails";
import AccountPage from "./components/account/AccountPage";
import MyAddressBook from "./components/account/MyAddressBook";
import AccountSettings from "./components/account/AccountSettings";
import MyOrders from "./components/account/MyOrders";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/category/:slug" element={<ProductListingPage />} />
      </Route>
      <Route path="/account" element={<AccountPage />}>
        <Route index element={<Navigate to="details" replace />} />
        <Route path="details" element={<MyDetails />} />
        <Route path="orders" element={<MyOrders />} />
        <Route path="address-book" element={<MyAddressBook />} />
        <Route path="settings" element={<AccountSettings />} />
     
      </Route>
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
