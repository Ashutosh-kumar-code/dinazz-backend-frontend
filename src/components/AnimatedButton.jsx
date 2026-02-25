import React, { useState } from "react";
import { createPortal } from "react-dom";
import BookingForm from "./BookingForm";
import sty_ani from "./AnimatedButton.module.css";


const AnimatedButton = ({
  bgColor,
  textColor,
  hoverBg,
  hoverText,
  fontSize,
  buttonText = "Book A Consultation",
  showPopup = true  // 👈 default prop
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const togglePopup = () => {
    if (showPopup) {
      setIsOpen(!isOpen);
    }
  };


  const defaultBg = bgColor || "#007a7a";
  const defaultText = textColor || "#ffffff";

  const finalHoverBg = hoverBg || defaultText;
  const finalHoverText = hoverText || defaultBg;

  const buttonStyle = {
    backgroundColor: isHovered ? finalHoverBg : defaultBg,
    color: isHovered ? finalHoverText : defaultText,
    fontSize: fontSize || "clamp(13px, 2vw, 15px)",
    cursor: "pointer"
  };

  return (
    <div className={sty_ani.container}>
      {/* Button Section */}
      <div
        className={sty_ani.button}
        onClick={togglePopup}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={buttonStyle}
        role="button"
        tabIndex={0}
        aria-label={buttonText}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            togglePopup();
          }
        }}
      >
        {/* 👈 Yaha dynamic text use kiya */}
        <span className={sty_ani.book}>{buttonText}</span>

        <div className={sty_ani.arrowBox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
            stroke={isHovered ? finalHoverText : defaultText}
            strokeWidth="1"
            viewBox="0 0 16 16"
            className={sty_ani.arrow}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13L13 3M13 3H6M13 3V10"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
            stroke={isHovered ? finalHoverText : defaultText}
            strokeWidth="1"
            viewBox="0 0 16 16"
            className={sty_ani.arrow}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13L13 3M13 3H6M13 3V10"
            />
          </svg>
        </div>
      </div>

      {/* Popup Section */}
      {isOpen && createPortal(
        <BookingForm onClose={togglePopup} />,
        document.body
      )}
    </div>
  );
};

export default AnimatedButton;
