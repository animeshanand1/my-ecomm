import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductById,
  selectCurrentProduct,
  selectLoading,
  selectError,
  clearCurrentProduct
} from '../features/product/productSlice';
import styles from './ProductDetailPage.module.css';

import ProductInfo from '../components/ProductInfo';
import RatingAndReviews from '../components/RatingAndReviews';
import YouMightAlsoLike from '../components/YouMightAlsoLike';
import ProductGallery from '../components/ProductGallery';

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector(selectCurrentProduct);
  console.log('product detail page rendered with product:', product);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }

    return () => {
      dispatch(clearCurrentProduct());
    };
  }, [id, dispatch]);
  if (loading) {
    return <div className={styles.loading}>Loading product details...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!product) {
    return <div className={styles.error}>Product not found.</div>;
  }

  return (
    <div className={styles.pageContainer}>
      <main>
        <div className={styles.mainContent}>
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
        <RatingAndReviews product={product} />
        <YouMightAlsoLike product={product} />
      </main>
    </div>
  );
};

export default ProductDetailPage;
