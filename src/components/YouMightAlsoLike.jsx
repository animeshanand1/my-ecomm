import React from 'react';
import styles from './YouMightAlsoLike.module.css';
import ProductCard from '../ProductCard/ProductCard';

const YouMightAlsoLike = () => {
  const similarProducts = [
    { id: 1, title: 'Polo with Contrast Trims', rating: '4.0', reviews: '1k', price: '212', image: 'https://placehold.co/400x500/e0e0e0/333?text=Polo' },
    { id: 2, title: 'Gradient Graphic T-shirt', rating: '3.5', reviews: '1k', price: '145', image: 'https://placehold.co/400x500/d6d6d6/333?text=T-Shirt' },
    { id: 3, title: 'Polo with Tipping Details', rating: '4.5', reviews: '1k', price: '180', image: 'https://placehold.co/400x500/cccccc/333?text=Polo+2' },
    { id: 4, title: 'Striped Jacket', rating: '5.0', reviews: '1k', price: '120', image: 'https://placehold.co/400x500/c2c2c2/333?text=Jacket' },
  ];

  return (
    <section className={styles.likeContainer}>
      <h2 className={styles.likeHeader}>You might also like</h2>
      <div className={styles.productGrid}>
        {similarProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default YouMightAlsoLike;