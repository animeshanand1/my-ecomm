import React from 'react';

import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import FeaturedProductsSection from '../components/FeaturedProductsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import NewsletterSection from '../components/NewsletterSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedProductsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
};

export default HomePage;