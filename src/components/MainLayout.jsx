import React from 'react';
import { Outlet } from 'react-router-dom'; 

import PromoStrip from './PromoStrip';
import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="app">
      <PromoStrip />
      <Header />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;