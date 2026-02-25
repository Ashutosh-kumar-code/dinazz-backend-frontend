import React from 'react';
import styles from './MegaMenu.module.css';

const MegaMenu = () => {
  return (
    <div className={styles.megaMenuWrapper}>
      <div className={styles.megaContent}>

        {/* Column 1: Hair Treatments */}
        <div className={styles.megaColumn}>
          <h4 className={styles.columnTitle}>
            Hair Treatments <span className={styles.diagonalArrow}>↗</span>
          </h4>
          <ul className={styles.list}>
            <li><a href="/hair-fixing" aria-label="Hair Fixing Treatment">Hair Fixing <span className={styles.icon}>✨</span></a></li>
            <li><a href="/hair-transplant" aria-label="Hair Transplant Treatment">Hair Transplant <span className={styles.icon}>✨</span></a></li>
            <li><a href="/hair-prp" aria-label="Hair PRP Plus Treatment">Hair PRP Plus <span className={styles.icon}>✨</span></a></li>
            <li><a href="/st-plus" aria-label="Dinaaz ST Plus Treatment">Dinaaz ST Plus <span className={styles.icon}>✨</span></a></li>
          </ul>
        </div>

        {/* Column 2: Hair Treatments Continued */}
        <div className={styles.megaColumn}>
          <h4 className={styles.emptyHeader}>&nbsp;</h4>
          <ul className={styles.list}>
            <li><a href="/cover" aria-label="Dinaaz Cover Treatment">Dinaaz Cover <span className={styles.icon}>✨</span></a></li>
            <li><a href="/regrow" aria-label="Dinaaz Regrow Treatment">Dinaaz Regrow <span className={styles.icon}>✨</span></a></li>
            <li><a href="/qr678" aria-label="QR 678 Hair Therapy">QR 678® Hair Therapy <span className={styles.icon}>✨</span></a></li>
            <li><a href="/stem-cell" aria-label="Stem Cell Hair Therapy">Stem Cell Hair Therapy <span className={styles.icon}>✨</span></a></li>
          </ul>
        </div>

        {/* Column 3: Skin Treatments */}
        <div className={styles.megaColumn}>
          <div className={styles.verticalDivider}></div>
          <h4 className={styles.columnTitle}>
            Skin Treatments <span className={styles.diagonalArrow}>↗</span>
          </h4>
          {/* Aap yahan Skin ke links add kar sakte hain */}
        </div>

      </div>
    </div>
  );
};

export default MegaMenu;