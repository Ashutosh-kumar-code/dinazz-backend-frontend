import React from "react";
import sty_card from "./TreatmentCard.module.css";


const TreatmentCard = ({ 
  icon, 
  title1, 
  title2, 
  listItems = [],
  className = "" 
  
}) => {
  return (
    <div className={`${sty_card.card} ${className}`}>
        <div className={sty_card.arrow}> <svg xmlns="http://www.w3.org/2000/svg" width="14  " height="14" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
</svg> </div>
      <div className={sty_card.card_main}>
        <div className={sty_card.top}>
          <div className={sty_card.top_part}>
            <img src={icon} alt="Tratment card" />
            <h2>
              {title1} <br /> {title2}
            </h2>
          </div>
        </div>
        
        <div className={sty_card.bottom}>
           
          <ul>
            {listItems.map((item, index) => (
              <li key={index} className="list-item">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TreatmentCard;
