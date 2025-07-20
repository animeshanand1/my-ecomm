
import React, { useState, useEffect, useMemo } from 'react';

import { useParams } from 'react-router-dom';
import ProductFilters from './ProductFilters';
import ProductGrid from './ProductGrid';
import styles from './ProductListingPage.module.css';
import allProductsData from '../../data/products.json';

const PRODUCTS_PER_PAGE = 6;

const ProductListingPage = () => {
  
  const { slug } = useParams();

  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    category: 'All',
    brand: 'All',
    maxPrice: 200,
    rating: 0,
  });
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    setAllProducts(allProductsData);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (slug) {
     
      const categoryFromSlug = slug.charAt(0).toUpperCase() + slug.slice(1);
    
      setFilters(prevFilters => ({
        ...prevFilters,
        category: categoryFromSlug,
      }));
    } else {
     
      setFilters(prevFilters => ({
        ...prevFilters,
        category: 'All',
      }));
    }
  }, [slug]); 

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...allProducts];

    result = result.filter(p => {
      const categoryMatch = filters.category === 'All' || p.category === filters.category;
      const brandMatch = filters.brand === 'All' || p.brand === filters.brand;
      const priceMatch = p.price <= filters.maxPrice;
      const ratingMatch = p.rating >= filters.rating;
      return categoryMatch && brandMatch && priceMatch && ratingMatch;
    });

    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating-desc':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => a.id - b.id);
        break;
    }

    return result;
  }, [allProducts, filters, sortOption]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, sortOption]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / PRODUCTS_PER_PAGE);
  const currentProducts = filteredAndSortedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );
  
  if (loading) {
    return <div className={styles.loading}><h2>Loading Products...</h2></div>;
  }
  
  return (
    <div className={`container ${styles.pageLayout}`}>
      <ProductFilters 
        filters={filters} 
        setFilters={setFilters} 
        allProducts={allProducts}
      />
      <ProductGrid 
        products={currentProducts}
        sortOption={sortOption}
        setSortOption={setSortOption}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductListingPage;