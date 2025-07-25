import React, { useState } from "react";
import styles from "./ProductInfo.module.css";
import Accordion from "./Accordion/Accordion";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/cart/cartSlice";
const ProductInfo = () => {
  const [selectedSize, setSelectedSize] = useState("S");
  const dispatch = useDispatch();
  const sizes = ["S", "M", "L", "XXL"];
  const handleAddToCart = () => {
    const cartItem = {
      productId: product._id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
      size: selectedSize,
    };
    console.log("Adding to cart:", cartItem);

    dispatch(addItemToCart(cartItem));
    console.log('Item added to cart.', cartItem)
  };

  return (
    <div className={styles.infoContainer}>
      <p className={styles.category}>Men Fashion</p>
      <h1 className={styles.title}>Loose Fit Hoodie</h1>
      <p className={styles.price}>2040.99 INR</p>
      <div className={styles.deliveryInfo}>
        <span>
          🕒 Order in <b>02:30:25</b> to get next day delivery
        </span>
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
        <button className={styles.addToCartBtn} onClick={handleAddToCart}>Add to Cart</button>
        <button
          className={styles.wishlistBtn}
          aria-label="Add to wishlist"
        ></button>
      </div>

      <Accordion title="Description & Fit" startOpen={true}>
        Loose-fit hoodie in medium-weight cotton-blend fabric with a soft,
        brushed inside. Boxy-fit silhouette, jersey-lined, drawstring hood,
        dropped shoulders, long sleeves, and a kangaroo pocket. Wide ribbing at
        cuffs and hem. Soft, brushed inside.
      </Accordion>
      <Accordion title="Shipping">
        <div className={styles.shippingDetails}>
          <div className={styles.shippingOption}>
            <div className={styles.shippingIcon}>🚚</div>
            <div className={styles.shippingText}>
              <span className={styles.shippingLabel}>Regular Package</span>
              <span className={styles.shippingDate}>10 - 12 October 2024</span>
            </div>
          </div>
          <div className={styles.shippingOption}>
            <div className={styles.shippingIcon}>📦</div>
            <div className={styles.shippingText}>
              <span className={styles.shippingLabel}>Disc 50%</span>
              <span className={styles.shippingDate}>3-4 Working Days</span>
            </div>
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default ProductInfo;
