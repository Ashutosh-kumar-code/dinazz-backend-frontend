import React from 'react';
import sty_img from './ImageCard.module.css';

const ImageCard = ({ backImg, frontImg, text }) => {
  return (
    <div className={sty_img.imageBox}>
      <div className={sty_img.image}>
        {/* Peeche wali image */}
        <img
          src={backImg}
          alt="Background"
          className={sty_img.backImage}
        />
        {/* Upar wali image */}
        <img
          src={frontImg}
          alt="Foreground"
          className={sty_img.frontImage}
        />
      </div>
      <p className={sty_img.description}>{text}</p>
    </div>
  );
};

export default ImageCard;