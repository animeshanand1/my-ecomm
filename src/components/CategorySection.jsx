import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategorySection.module.css';

const categoryData = [
  { name: "Women's", slug: 'women', image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?..." },
  { name: "Men's", slug: 'men', image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVucyUyMHNoaXJ0fGVufDB8fDB8fHww" },
  { name: "Electronics", slug: 'electronics', image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?..." },
  { name: "Home Essentials", slug: 'home', image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?..." },
  { name: "Gadgets", slug: 'gadgets', image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?..." },
  { name: "Kids", slug: 'kids', image: "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMGZhc2hpb258ZW58MHx8MHx8fDA%3D" }
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
