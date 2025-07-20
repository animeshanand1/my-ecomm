import React from "react";
import ProductCard from "./ProductCard";
import styles from "./FeaturedProductsSection.module.css";
import { Link } from "react-router-dom";

const productsData = [
  {
    id: 1,
    title: "Classic Trench Coat",
    price: "$129.99",
    image:
      "https://images.unsplash.com/photo-1591047139829-d916bb69a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 2,
    title: "Aero-Run Sneakers",
    price: "$89.50",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 3,
    title: "Noise-Cancelling Headphones",
    price: "$249.00",
    image:
      "https://images.unsplash.com/photo-1618384887924-c9b5f5833238?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 4,
    title: "Minimalist Armchair",
    price: "$350.00",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80",
  },
];

const FeaturedProductsSection = () => {
  return (
    <section id="featured-products" className={styles.featuredSection}>
      <div className="container">
        <h2 className={styles.title}>Featured Products</h2>
        <Link to="/products" className="text-blue-600 hover:underline">
          View All
        </Link>
        <div className={styles.productGrid}>
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
