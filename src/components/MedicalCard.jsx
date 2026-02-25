import React from "react";
import styles from "./MedicalCard.module.css";

const MedicalCard = ({ title, description, img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={img} alt={title} className={styles.zoomImage} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default MedicalCard;