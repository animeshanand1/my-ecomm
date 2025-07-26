import React, { useState } from "react";
import styles from "./ProductInfo.module.css";
import Accordion from "./Accordion/Accordion";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/cart/cartSlice";

const ProductInfo = ({ product }) => {
  console.log("ProductInfo component rendered with product:", product);
  const dispatch = useDispatch();

  const sizes = product.variants.map((variant) => variant.attributes.size);
  const [selectedSize, setSelectedSize] = useState(sizes[0] || "");

  const handleAddToCart = () => {
    const cartItem = {
      productId: product._id,
      name: product.name,
      image: product.variants[0]?.images[0]?.url || "", // fallback if no image
      price: product.pricing.salePrice || product.pricing.basePrice,
      quantity: 1,
      size: selectedSize,
    };

    dispatch(addItemToCart(cartItem));
    console.log("Item added to cart:", cartItem);
  };

  return (
    <div className={styles.infoContainer}>
      <h4>shhdisahudihsdih</h4>
      <p className={styles.category}>
        {product.category.primary} / {product.category.secondary}
      </p>

      
      <h1 className={styles.title}>{product.name}</h1>

      <p className={styles.price}>
        {product.pricing.salePrice
          ? `${product.pricing.salePrice} ${product.pricing.currency}`
          : `${product.pricing.basePrice} ${product.pricing.currency}`}
      </p>


      <div className={styles.rating}>
        ⭐ {product.ratings.average} ({product.ratings.count} reviews)
      </div>

     
      <div>
        <h2 className={styles.sectionTitle}>Select Size</h2>
        <div className={styles.sizeSelector}>
          {sizes.map((size) => (
            <button
              key={size}
              className={`${styles.sizeButton} ${
                selectedSize === size ? styles.sizeButtonSelected : ""
              }`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.addToCartBtn} onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className={styles.wishlistBtn} aria-label="Add to wishlist">
          ♥
        </button>
      </div>

      <Accordion title="Description & Fit" startOpen={true}>
        {product.description}
      </Accordion>

      <Accordion title="Specifications">
        <ul>
          <li>Closure: {product.specifications.closure}</li>
          <li>Sole: {product.specifications.soleMaterial}</li>
          <li>Upper: {product.specifications.upperMaterial}</li>
          <li>Insole: {product.specifications.insole}</li>
        </ul>
      </Accordion>

      <Accordion title="Care Instructions">
        <ul>
          {product.specifications.careInstructions.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </Accordion>
    </div>
  );
};

export default ProductInfo;
