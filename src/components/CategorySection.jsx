import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategorySection.module.css';

const categoryData = [
  { name: "Women's", slug: 'women', image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?..." },
  { name: "Men's", slug: 'men', image: "https://images.unsplash.com/photo-1593030342854-c8a032a3264b?..." },
  { name: "Electronics", slug: 'electronics', image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?..." },
  { name: "Home Essentials", slug: 'home', image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?..." },
  { name: "Gadgets", slug: 'gadgets', image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?..." }
];

const CategorySection = () => {
  return (
    <section id="categories" className={styles.categoriesSection}>
      <div className="container">
        <h2 className={styles.title}>Top Categories</h2>
        <div className={styles.categoryScroller}>
          {categoryData.map(category => (
            <Link
              to={`/products?category=${category.slug}`}
              key={category.name}
              className={styles.categoryCard}
            >
              <img src={category.image} alt={category.name} />
              <span>{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
