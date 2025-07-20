
import React from 'react';
import styles from './ProductListingPage.module.css';

const ProductFilters = ({ filters, setFilters, allProducts }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setFilters(prev => ({ ...prev, rating: prev.rating === rating ? 0 : rating }));
  };

  const categories = ['All', ...new Set(allProducts.map(p => p.category))];
  const brands = ['All', ...new Set(allProducts.map(p => p.brand))];

  return (
    <aside className={styles.filtersSidebar}>
      <h4>Filters</h4>
      
      {/* Category Filter */}
      <div className={styles.filterGroup}>
        <label htmlFor="category">Category</label>
        <select id="category" name="category" value={filters.category} onChange={handleFilterChange}>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </div>

      {/* Brand Filter */}
      <div className={styles.filterGroup}>
        <label htmlFor="brand">Brand</label>
        <select id="brand" name="brand" value={filters.brand} onChange={handleFilterChange}>
          {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
        </select>
      </div>

      {/* Price Range Filter */}
      <div className={styles.filterGroup}>
        <label htmlFor="maxPrice">Price Range: ${filters.maxPrice}</label>
        <input
          type="range"
          id="maxPrice"
          name="maxPrice"
          min="0"
          max="200"
          step="10"
          value={filters.maxPrice}
          onChange={handleFilterChange}
        />
      </div>

      {/* Rating Filter */}
      <div className={styles.filterGroup}>
        <label>Rating</label>
        <div className={styles.ratingFilter}>
          {[4, 3, 2, 1].map(star => (
            <button
              key={star}
              className={filters.rating >= star ? styles.ratingActive : ''}
              onClick={() => handleRatingChange(star)}
            >
              {star} ★ & Up
            </button>
          ))}
        </div>
      </div>
      
      <button className={styles.clearFilters} onClick={() => setFilters({ category: 'All', brand: 'All', maxPrice: 200, rating: 0 })}>
        Clear Filters
      </button>
    </aside>
  );
};

export default ProductFilters;