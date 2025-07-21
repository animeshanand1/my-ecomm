import React, { useState } from 'react';
import styles from './ProductGallery.module.css';

const ProductGallery = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = [
    'https://placehold.co/600x600/8c2a3d/white?text=Hoodie+1',
    'https://placehold.co/600x600/8c2a3d/white?text=Hoodie+2',
    'https://placehold.co/600x600/8c2a3d/white?text=Hoodie+3',
  ];

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.mainImageContainer}>
        <img src={images[activeImage]} alt="Loose Fit Hoodie" className={styles.mainImage} />
      </div>
      <div className={styles.thumbnailContainer}>
        {images.map((img, index) => (
          <div 
            key={index} 
            className={`${styles.thumbnail} ${index === activeImage ? styles.thumbnailActive : ''}`}
            onClick={() => setActiveImage(index)}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} className={styles.thumbnailImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;