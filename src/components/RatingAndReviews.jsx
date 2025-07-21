import React from 'react';
import styles from './RatingAndReviews.module.css';
import { StarIcon } from '../../Icons';

const RatingAndReviews = () => {
    const ratingDistribution = [
        { stars: 5, percentage: 80 }, { stars: 4, percentage: 15 },
        { stars: 3, percentage: 3 }, { stars: 2, percentage: 1 },
        { stars: 1, percentage: 1 },
    ];

    return (
        <section className={styles.ratingsSection}>
            <h2 className={styles.reviewSectionTitle}>Rating & Reviews</h2>
            <div className={styles.ratingsContainer}>
                <div className={styles.ratingsContent}>
                    <div className={styles.summary}>
                        <div>
                            <span className={styles.averageRating}>4,5</span>
                            <span className={styles.ratingText}>/5</span>
                        </div>
                        <div className={styles.totalReviews}>(50 New Reviews)</div>
                    </div>
                    <div className={styles.breakdown}>
                        {ratingDistribution.map(item => (
                            <div key={item.stars} className={styles.ratingRow}>
                                <span>{item.stars}</span>
                                <StarIcon fill="#facc15" />
                                <div className={styles.progressBarContainer}>
                                    <div className={styles.progressBar} style={{ width: `${item.percentage}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.review}>
                    <div className={styles.reviewHeader}>
                        <div className={styles.reviewAuthor}>
                            <img src="https://placehold.co/40x40/c7d2fe/3730a3?text=AM" alt="Alex Mathio" className={styles.reviewAvatar} />
                            <div>
                                <p className={styles.reviewAuthorName}>Alex Mathio</p>
                                <div style={{ display: 'flex' }}>
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} fill="#facc15" />)}
                                </div>
                            </div>
                        </div>
                        <span className={styles.reviewDate}>13 Oct 2024</span>
                    </div>
                    <p className={styles.reviewBody}>
                        "Hooligan's dedication to sustainability and ethical practices resonates strongly with today's consumers, positioning the brand as a responsible choice in the fashion world."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RatingAndReviews;