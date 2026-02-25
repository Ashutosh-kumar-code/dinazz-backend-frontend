import React, { useState, useCallback, useEffect } from "react";
import styles from "./Homepart2.module.css";
import backImg from "../assets/Property 1=rest.png";
import img1 from "../assets/Property 1=image 12.png";
import img2 from "../assets/Property 1=image 13.png";
import circle2 from "../assets/circle2.png";

import img3 from "../assets/Property 1=image 14.png";
// import phase5_circle from "../assets/Group 9.png";
import input_secImg1 from "../assets/Group 8.webp";
import input_secImg2 from "../assets/Group 9 (1).png";
import ImageCard from "./ImageCard";
import star from "../assets/star.png";
import AnimatedButton from "./AnimatedButton";
import MedicalCard from "./MedicalCard";
import cardImg1 from "../assets/cardImg1.webp";
import cardImg2 from "../assets/cardImg2.png";
import cardImg3 from "../assets/Property 1=3.svg";
import cardImg4 from "../assets/cardImg4.webp";
import Review, { reviews } from "./Review";
import multiImg from "../assets/multiimg1.png";
import hairIcon from "../assets/icons.png";
import TreatmentCard from "./TreatmentCard";
import phase5Img from "../assets/img.png";
import Steps from "./Steps";
import StorySection from "./StorySection";
import phase6img from "../assets/Ellipse 16.webp";
import phase6img2 from "../assets/Ellipse 16 (1).webp";
import multiImgPhone from "../assets/multiimgPhone (2).png";
import skinimg from "../assets/girlSkin.png";
import phase31 from "../assets/phase31.png";
import phase32 from "../assets/phase32.png";
import washimg from "../assets/wash.png";
import Form from "./Form";
import circle1 from "../assets/circle1.webp";
import testimonail1 from "../assets/testimonail1.jpeg";
import testimonail2 from "../assets/testimonail2.jpeg";
import testimonail3 from "../assets/testimonail3.jpeg";

const HomePart2 = () => {
    const images = [testimonail1, testimonail2, testimonail3];
  const [currentReview, setCurrentReview] = useState(reviews[0]);
  const [fade, setFade] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-cycle through all 3 images
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); // Changed from 3000ms to 1500ms (faster)
    return () => clearInterval(interval);
  }, [images.length, isAutoPlaying]);

  // Optimize mobile performance with debounced resize handler
  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        // Force re-render on resize for responsive images
        window.dispatchEvent(new Event('resize'));
      }, 150);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  // Handle image navigation with arrows
  const handleImageChange = useCallback((direction) => {
    let nextIndex;
    if (direction === 'prev') {
      nextIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    } else {
      nextIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    }
    setCurrentImageIndex(nextIndex);
  }, [currentImageIndex, images.length]);

  const handleReviewChange = useCallback((direction) => {
    const currentIndex = reviews.findIndex(review => review.id === currentReview.id);
    let nextIndex;
    
    if (direction === 'prev') {
      nextIndex = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
    } else {
      nextIndex = currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
    }
    
    // Also change the image when review changes
    const imageNextIndex = direction === 'prev' 
      ? (currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1)
      : (currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1);
    
    // Stop auto-play when user manually navigates
    setIsAutoPlaying(false);
    
    setFade(false);
    setTimeout(() => {
      setCurrentReview(reviews[nextIndex]);
      setCurrentImageIndex(imageNextIndex);
      setFade(true);
      
      // Restart auto-play after 5 seconds
      setTimeout(() => {
        setIsAutoPlaying(true);
      }, 5000);
    }, 3000);
  }, [currentReview, currentImageIndex, reviews, images]);

  return (
    <div className={styles.HomePart2_main}>
      <div className={styles.backimg}>
        <div className={styles.phase1}>
          <div className={styles.pahse3Main}>
            <div className={styles.phase1_mainTextArea}>
              <div className={styles.phase1_textarea1}>
                <p>THE REAL PROBLEM</p>
                <h1>Why Most Hair & Skin Treatments Fail</h1>
              </div>

              <div className={styles.imageArea}>
                <div className={styles.imagePart1}>
                  <div >
<img src={circle1} alt="Hair & Skin Treatments"  className={styles.CircleText} style={{
                    width: "128px",
                    height: "115px", // Adjusted to match 1.10 ratio (318x288)
                    maxWidth: "100%",
                    height: "auto", // Better for mobile responsive
                  }} loading="lazy" />
                  </div>
                  <div className={styles.img1}>
                    <ImageCard
                      backImg={backImg}
                      frontImg={img1}
                      text="Salon treatments with no diagnosis"
                    />
                  </div>
                </div>
                <div className={styles.imagePart2}>
                  <div className={styles.img2}>
                    <ImageCard
                      backImg={backImg}
                      frontImg={img2}
                      text="Expensive procedures without understanding the root cause"
                    />
                  </div>
                  <div className={styles.img3}>
                    <ImageCard
                      backImg={backImg}
                      frontImg={img3}
                      text="One-size-fits-all packages"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.phase1_textarea2}>
                <div className={styles.infoSection}>
                  <div className={styles.introText}>
                    Many patients come to us after trying:
                  </div>
                  <ul className={styles.treatmentList}>
                    <li>Salon treatments with no diagnosis</li>
                    <li>One-size-fits-all packages</li>
                    <li>
                      Expensive procedures without understanding the root cause
                    </li>
                  </ul>
                  <div className={styles.summaryText}>
                    Skin and hair problems often look similar but require very
                    different medical treatments. Without proper diagnosis,
                    results are unpredictable, and sometimes harmful.
                  </div>
                </div>
              </div>
            </div>

            <img src={star} alt="Skin and hair problems" className={styles.startImg} loading="lazy" style={{ width: "130px", height: "109px", objectFit: "contain" }} />
          </div>
        </div>

        {/* ----------------------------------------------------------------------- */}

        <div className={styles.phase2}>
          <div className={styles.phase2_head}>
            <div >
            <img src={circle2} alt="Apart" className={styles.phase2_circle} style={{ width: "318px", height: "288px", objectFit: "contain" }} />  

            </div>

            <div className={styles.phase2text}>
              <h2>KEY DIFFERENCES</h2>
              <h3>What Sets Us Apart</h3>
            </div>
          </div>

          <div className={styles.phase2ImageSection}>
            <MedicalCard
              title="Dermatologist Diagnosis First"
              description="Every concern is medically evaluated before treatment begins."
              img={cardImg1}
            />
            <MedicalCard
              title="Customized Treatment Plans"
              description="No fixed packages. No unnecessary procedures."
              img={cardImg2}
            />
            <MedicalCard
              title="Long-Term Skin & Hair Health"
              description="We focus on sustainable results, not short-term cosmetic fixes."
              img={cardImg3}
            />
            <MedicalCard
              title="Ethical Medical Advice"
              description="Sometimes, the right decision is not to treat, and we're honest about that."
              img={cardImg4}
            />
          </div>

          <center className={styles.phase2Button}>
            <AnimatedButton
              bgColor="#DD9233"
              textColor="white"
              hoverBg="rgb(205, 138, 49)"
              hoverText="#ffffff"
            />
          </center>
        </div>
      </div>

      {/* --------------------------------------------------------------------- */}

      <div className={styles.phase3}>
        <div className={styles.phase3section1}>
          <p>TESTIMONIALS</p>
          <h1>
            What Our Patients Say <br className={styles.breakLine} /> About Our
            Services
          </h1>
        </div>

        <div className={styles.phase3section2}>
          <div className={styles.container}>
            {/* LEFT SIDE */}
            <div className={styles.left}>
              <Review onReviewChange={handleReviewChange} />
            </div>

            {/* CENTER */}
            <div className={styles.center}>
              <div className={styles.quoteTop}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
              </div>

              <p
                className={styles.text}
                style={{
                  opacity: fade ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                {currentReview.text}
              </p>

              <div className={styles.quoteBottom}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="40"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                </svg>
              </div>

              <div
                className={styles.reviewItemText}
                style={{
                  opacity: fade ? 1 : 0,
                  transition: "opacity 0.3s ease",
                }}
              >
                <h4>{currentReview.name}</h4>
                {/* <p>{currentReview.rating}</p> */}
              </div>

              <div className={styles.arrows}>
                <button 
                  className={styles.arrow}
                  aria-label="Previous review"
                  onClick={() => handleReviewChange('prev')}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="26"
                    fill="#0c5858"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                  </svg>
                </button>
                <button 
                  className={styles.arrow}
                  aria-label="Next review"
                  onClick={() => handleReviewChange('next')}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="26"
                    fill="#0c5858"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className={styles.right}>
              {/* <div className={styles.rightImgWrapper}>
                <img
                  src={currentReview.resultImg}
                  alt={currentReview.name}
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "10px",
                    opacity: fade ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out",
                    objectFit: "cover",
                  }}
                />

              </div> */}

                    <div style={{ textAlign: "center", padding: "50px" }}>
                <img
                  src={images[currentImageIndex]}
                  alt={`Testimonial ${currentImageIndex + 1}`}
                  style={{
                    width: "100%",
                    maxWidth: "250px",
                    height: "auto", // Better for mobile responsive
                    aspectRatio: "0.96", // Maintain proper ratio
                    borderRadius: "10px",
                    transition: "opacity 0.7s ease-in-out",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                />
                {/* <div style={{ marginTop: "15px", fontSize: "14px", color: "#666" }}>
                  {currentImageIndex + 1} / {images.length}
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------------------------------- */}

        <div className={styles.phase3section3}>
          <div className={styles.textArea}>
            <p>RESULTS</p>
            <h1>
              Our Results Speaks <br /> For Themselves
            </h1>
          </div>
          <div className={styles.imgDiv}>
            <img src={multiImg} alt=" RESULTS " loading="lazy" className={styles.desktopImg} />
            <img
              src={multiImgPhone}
              loading="lazy"
              className={styles.mobileImg}
              alt="Mobile"
            />
          </div>
        </div>

        <div className={styles.phase4}>
          <div className={styles.phase4TextArea}>
            <p>SERVICES</p>
            <h1> Treatments Available </h1>
          </div>
          <div className={styles.phase4Card}>
            <TreatmentCard
              icon={hairIcon}
              title1="Hair"
              title2="Treatment"
              listItems={[
                "Hair loss diagnosis & treatment",
                "PRP therapy",
                "Hair restoration solutions",
                "Scalp & trichology care",
              ]}
            />
            <TreatmentCard
              icon={skinimg}
              title1="Skin"
              title2="Treatment"
              listItems={[
                "Acne & acne scar treatment",
                "Pigmentation & melasma",
                "Medical skin conditions (eczema, psoriasis)",
                "Anti-aging & skin rejuvenation",
              ]}
            />
            <TreatmentCard
              icon={washimg}
              title1="Aesthetic"
              title2="Dermatology"
              listItems={[
                "Anti-Wrinkle Treatments & Dermal Fillers (Medically Guided Consultation)",
                "Non-surgical facial enhancements",
                "Skin tightening & rejuvenation",
              ]}
            />
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------------ */}

      <div className={styles.phase5}>
        {/* Blur circle via CSS only - no image */}
        <div className={styles.phase5Circle}> {/* <img src={phase5_circle} alt="" /> */}</div>

        <div className={styles.phase5TextArea}>
          <div className={styles.phase5Text}>
            <p>OUR PROCESS</p>
            <h1>
              What to Expect  At <br className={styles.phase5LineBreak} /> Dinaaz
            </h1>
          </div>
        </div>

        <div className={styles.pahse5Seaction1}>
          <div className={styles.pahse5Seaction1_img}>
            
            <img src={phase5Img} alt="PROCESS" loading="lazy" />
          </div>
          <div className={styles.pahse5Seaction1_step}>
            <Steps />
          </div>
        </div>

        <center className={styles.pahse5Seaction1_button}>
          <AnimatedButton
            bgColor="#DD9233"
            textColor="white"
            hoverBg="rgb(205, 138, 49)"
            hoverText="#ffffff"
          />
        </center>

        <div className={styles.pahse5Seaction2}>
          <div className={styles.pahse5Seaction2_img}>
            <StorySection />
          </div>
        </div>

        <div className={styles.pahse5Seaction3}>
          {/* Blur bubbles via CSS */}
          <div >
            <img
              src={input_secImg1}
              alt="CONSULT US"
              className={styles.input_secImg1}
              style={{ width: "318px", height: "288px", objectFit: "contain" }}
            /> 
          </div>
          <div >

            <img src={input_secImg2} alt="CONSULT US" className={styles.input_secImg2} style={{ width: "318px", height: "288px", objectFit: "contain" }} />

          </div>

          <div className={styles.pahse5Seaction3Head}>
            <div className={styles.pahse5Seaction3_Text}>
              <span>CONSULT US</span>
              <h2>
                Not Sure What <br /> Treatment You Need?
              </h2>
              <p>
                Hair and skin concerns can be confusing. A proper diagnosis can
                save time, money, and prevent unnecessary procedures
              </p>
            </div>
          </div>
          <center>
            <div className={styles.pahse5Seaction3_input}>
              <Form />
            </div>
          </center>

          {/* <center>
            <div className={styles.pahse5Seaction3_button}>
              
            </div>
          </center> */}
        </div>
      </div>

      {/* ---------------------------------------------------------------------------------  */}

      <div className={styles.phase6}>
        <div className={styles.phase6Box}>
          <div className={styles.phase6Box_text}>
            <h2>
              Your Skin & Hair Deserve Medical Expertise , Not Experiments
            </h2>
            <AnimatedButton
              bgColor="#ffffff"
              textColor="black"
              hoverBg="#ffffff"
              hoverText="black"
            />
          </div>
          <div className={styles.phase6Box_img}>
            <img
              src={phase6img}
              alt="Laptop View"
              loading="lazy"
              className={styles.phase6Img_Desktop}
            />
            <img
              src={phase6img2}
              alt="Mobile View"
              loading="lazy"
              className={styles.phase6Img_Mobile}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePart2;
