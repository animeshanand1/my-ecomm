
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetailPage.module.css'; 

import products from '../data/products.json';
import ProductInfo from '../components/ProductInfo';
import RatingAndReviews from '../components/RatingAndReviews';
import YouMightAlsoLike from '../components/YouMightAlsoLike';
import ProductGallery from '../components/ProductGallery';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
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