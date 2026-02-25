import React, { useEffect, useState } from "react";
import styles from "./Review.module.css";
import image from "../assets/Ellipse 13.webp";
import img1 from "../assets/testimonail1.jpeg";
import img2 from "../assets/testimonail2.jpeg";
import img3 from "../assets/testimonail3.jpeg";
import img4 from "../assets/Property 1=rest.png";

const reviews = [
  {
    id: 1,
    name: "Sneha UN",
    rating: "4.9 ⭐ | 26/12/2025",
    avatar: image,
    resultImg: img1,
    text: "Comparing to other clinics I don't know but personally I preferred this clinic so I took consultation and it was so good later I took hair transplantation and also gfc I can see good grow.",
  },
  {
    id: 2,
    name: "Harish M",
    rating: "5.0 ⭐ | 15/01/2026",
    avatar: image,
    resultImg: img2,
    text: "Dr. Nazia is extremely knowledgeable and honest. She didn't push unnecessary treatments and gave me a clear diagnosis. My skin has improved tremendously in just 3 months.",
  },
  {
    id: 3,
    name: "Lubna khattam",
    rating: "4.8 ⭐ | 02/02/2026",
    avatar: image,
    resultImg: img3,
    text: "Amazing experience at Dinaaz. The team is professional, the treatment is medically sound, and I could see results within weeks. Highly recommend for anyone suffering from hair loss.",
  },
  {
    id: 4,
    name: "Sneha UN",
    rating: "5.0 ⭐ | 10/02/2026",
    avatar: image,
    resultImg: img4,
    text: "Finally a clinic that actually listens! No package selling, no pushing products. Just honest medical advice. My skin condition has been diagnosed correctly for the first time.",
  },
];

const Review = ({ onReviewChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (onReviewChange) {
      onReviewChange(reviews[currentIndex]);
    }
  }, [currentIndex, onReviewChange]);

  // const currentReview = reviews[currentIndex];

  return (
    <div className={styles.circleWrapper}>
      <div className={styles.circle}>
        {reviews.map((item, index) => {
          const offset = (index - currentIndex + reviews.length) % reviews.length;
          return (
            <div
              key={item.id}
              className={`${styles.profile} ${styles[`offset${offset}`]}`}
            >
              <div className={styles.reviewItem}>
                <img src={item.avatar} alt={item.name} />
                <div className={styles.reviewItemText}>
                  <h4>{item.name}</h4>
                  {/* <p>{item.rating}</p> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { reviews };
export default Review;
