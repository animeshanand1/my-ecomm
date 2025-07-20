import React from "react";
import styles from "./TestimonialsSection.module.css";

const testimonialsData = [
  {
    quote:
      "The quality is outstanding and the customer service was incredibly helpful. My new favorite place to shop online!",
    name: "Jessica Miller",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "I'm always impressed with the unique selection and fast shipping. Aura has become my go-to for gifts.",
    name: "Michael Chen",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "A truly beautiful and user-friendly website. The products are even better in person. Highly recommended!",
    name: "Sarah Johnson",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29433?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "From start to finish, the shopping experience was seamless. The packaging was also eco-friendly, which I loved.",
    name: "David Lee",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
  },
];

const TestimonialsSection = () => {
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className="container">
        <h2 className={styles.title}>What Our Customers Say</h2>
        <div className={styles.testimonialCarousel}>
          <div className={styles.scrollingContainer}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <div className={styles.testimonialCard} key={index}>
                <blockquote>"{testimonial.quote}"</blockquote>
                <div className={styles.customerInfo}>
                  <img
                    src={testimonial.image}
                    alt={`Customer ${testimonial.name}`}
                  />
                  <cite>{testimonial.name}</cite>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
