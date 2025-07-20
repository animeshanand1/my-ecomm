import React from 'react';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import styles from './ProductListingPage.module.css';

const ProductGrid = ({ products, sortOption, setSortOption, currentPage, totalPages, onPageChange }) => {
  return (
    <main className={styles.mainContent}>
      <div className={styles.toolbar}>
        <p>{products.length} Products Found</p>
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="default">Default Sorting</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Highest Rated</option>
        </select>
      </div>
      
      {products.length > 0 ? (
        <div className={styles.productGrid}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className={styles.noProducts}>
          <h3>No products match your criteria.</h3>
          <p>Try clearing some filters to see more results.</p>
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </main>
  );
};

export default ProductGrid;