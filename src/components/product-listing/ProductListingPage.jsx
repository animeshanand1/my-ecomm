import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProducts,
  fetchProductsByCategory,
  setFilters,
  setPage,
  setSort,
  selectProducts,
  selectPagination,
  selectLoading,
  selectError,
  selectFilters
} from '../../features/product/productSlice';
import ProductFilters from './ProductFilters';
import ProductGrid from './ProductGrid';
import styles from './ProductListingPage.module.css';

const PRODUCTS_PER_PAGE = 6;

const ProductListingPage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  
  // Redux selectors
  const products = useSelector(selectProducts);
  const pagination = useSelector(selectPagination);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);

  // Initialize filters based on URL slug
  useEffect(() => {
    if (slug) {
      // If we have a slug, fetch products by category
      dispatch(setFilters({ category: slug }));
      dispatch(fetchProductsByCategory({ 
        category: slug,
        page: pagination.page,
        limit: PRODUCTS_PER_PAGE 
      }));
    } else {
      // Otherwise fetch all products
      dispatch(setFilters({ category: '' }));
      dispatch(fetchProducts({ 
        page: pagination.page, 
        limit: PRODUCTS_PER_PAGE 
      }));
    }
  }, [slug, dispatch]);

  // Fetch products when filters or pagination changes
  useEffect(() => {
    const params = {
      ...filters,
      page: pagination.page,
      limit: PRODUCTS_PER_PAGE,
    };
    
    // Remove empty values
    Object.keys(params).forEach(key => {
      if (params[key] === '' || (Array.isArray(params[key]) && params[key].length === 0)) {
        delete params[key];
      }
    });

    if (filters.category) {
      dispatch(fetchProductsByCategory({
        category: filters.category,
        ...params
      }));
    } else {
      dispatch(fetchProducts(params));
    }
  }, [filters, pagination.page, dispatch]);

  const handleFilterChange = (newFilters) => {
    dispatch(setFilters(newFilters));
  };

  const handleSortChange = (sortOption) => {
    // Map your sort options to API sort parameters
    const sortMap = {
      'default': '-createdAt',
      'price-asc': 'pricing.salePrice',
      'price-desc': '-pricing.salePrice',
      'rating-desc': '-ratings.average'
    };
    
    dispatch(setSort(sortMap[sortOption] || '-createdAt'));
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading && products.length === 0) {
    return <div className={styles.loading}><h2>Loading Products...</h2></div>;
  }

  if (error) {
    return (
      <div className={styles.error}>
        <h2>Error loading products</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={`container ${styles.pageLayout}`}>
      <ProductFilters 
        filters={filters} 
        setFilters={handleFilterChange} 
        allProducts={products}
      />
      <ProductGrid 
        products={products}
        sortOption={filters.sort}
        setSortOption={handleSortChange}
        currentPage={pagination.page}
        totalPages={pagination.pages}
        onPageChange={handlePageChange}
        totalProducts={pagination.total}
      />
    </div>
  );
};

export default ProductListingPage;