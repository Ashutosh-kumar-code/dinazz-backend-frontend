import React, { useState, useEffect, useRef } from "react";
import styles from "./Steps.module.css";

const stepsData = [
  {
    number: "01",
    title: "Medical Consultation",
    description: "A detailed evaluation by a dermatologist.",
  },
  {
    number: "02",
    title: "Accurate Diagnosis",
    description: "Understanding the root cause of your concern.",
  },
  {
    number: "03",
    title: "Personalized Treatment Plan",
    description: "Only treatments that are medically necessary.",
  },
  {
    number: "04",
    title: "Ongoing Care & Follow-Ups",
    description: "Focused on long-term skin and hair health.",
  },
];

const Steps = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className={styles.container} ref={containerRef}>
      {stepsData.map((step, index) => (
        <div
          key={step.number}
          className={`${styles.step} ${hasAnimated ? styles.animate : ""}`}
          style={{ "--i": index }}
        >
          {index !== stepsData.length - 1 && (
            <div className={styles.line_container}>
              <div className={styles.line_bg}></div>
              <div className={styles.line_active}></div>
            </div>
          )}

          <div className={styles.circle}>{step.number}</div>

          <div className={styles.content}>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
