import React from "react";
import styles from "./ProductListingPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilters,
  clearFilters,
  selectFilters,
} from "../../features/product/productSlice";

const ProductFilters = ({ allProducts }) => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  // Extract unique values for filters
  const categories = [
    "All",
    ...new Set(allProducts.map((p) => p.category?.primary || "Other")),
  ];
  const brands = ["All", ...new Set(allProducts.map((p) => p.brand))];

  const handleFilterChange = (filterType, value) => {
    if (filterType === "category" && value === "All") {
      dispatch(setFilters({ category: "" }));
    } else if (filterType === "brand" && value === "All") {
      dispatch(setFilters({ brand: [] }));
    } else if (filterType === "brand") {
      const currentBrands = filters.brand || [];
      const updatedBrands = currentBrands.includes(value)
        ? currentBrands.filter((b) => b !== value)
        : [...currentBrands, value];
      dispatch(setFilters({ brand: updatedBrands }));
    } else {
      dispatch(setFilters({ [filterType]: value }));
    }
  };

  const handlePriceChange = (value) => {
    dispatch(setFilters({ maxPrice: value }));
  };

  const handleRatingChange = (value) => {
    dispatch(setFilters({ minRating: value }));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <aside className={styles.filters}>
      <div className={styles.filterHeader}>
        <h3>Filters</h3>
        <button onClick={handleClearFilters} className={styles.clearButton}>
          Clear All
        </button>
      </div>

      {/* Category Filter */}
      <div className={styles.filterGroup}>
        <h4>Category</h4>
        <select
          value={filters.category || "All"}
          onChange={(e) => handleFilterChange("category", e.target.value)}
          className={styles.select}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Brand Filter */}
      <div className={styles.filterGroup}>
        <h4>Brand</h4>
        <div className={styles.checkboxGroup}>
          {brands.slice(1).map((brand) => (
            <label key={brand} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={filters.brand?.includes(brand) || false}
                onChange={() => handleFilterChange("brand", brand)}
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className={styles.filterGroup}>
        <h4>Max Price: ${filters.maxPrice || 200}</h4>
        <input
          type="range"
          min="0"
          max="200"
          value={filters.maxPrice || 200}
          onChange={(e) => handlePriceChange(e.target.value)}
          className={styles.slider}
        />
      </div>

      {/* Rating Filter */}
      <div className={styles.filterGroup}>
        <h4>Minimum Rating: {filters.minRating || 0} ★</h4>
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={filters.minRating || 0}
          onChange={(e) => handleRatingChange(e.target.value)}
          className={styles.slider}
        />
      </div>
    </aside>
  );
};
export default ProductFilters;
