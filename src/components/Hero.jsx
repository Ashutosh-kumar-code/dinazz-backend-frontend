import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Build Your Future With <span>Modern UI</span>
        </h1>

        <p className={styles.subtitle}>
          Clean design. Smooth animation. Professional look.
        </p>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Get Started</button>
          <button className={styles.secondaryBtn}>Learn More</button>
        </div>
      </div>

      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
    </section>
  );
};

export default Hero;
