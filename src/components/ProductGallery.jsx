import React, { useState } from "react";
import styles from "./ProductGallery.module.css";

const ProductGallery = ({ product }) => {
  console.log("ProductGallery component rendered with product:", product);
  const allImages = product.variants.flatMap((variant) =>
    variant.images.map((img) => img.url)
  );

  const [activeImage, setActiveImage] = useState(allImages[0]);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.mainImage}>
        <img src={activeImage} alt={product.name} />
      </div>
      <div className={styles.thumbnailList}>
        {allImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className={img === activeImage ? styles.activeThumbnail : ""}
            onClick={() => setActiveImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
