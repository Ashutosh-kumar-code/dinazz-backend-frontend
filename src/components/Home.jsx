import React, { useEffect, useState } from "react";
import sty_home from "./Home.module.css";
import AnimatedButton from "./AnimatedButton";
// import heroImg from "../assets/hero.png";
import girlImg from "../assets/doc-Photoroom 1.png";
import coverBack from "../assets/coverBack.png"
import whatsapp_icon from "../assets/whatsapp.svg"
import HomePart2 from "./HomePart2";

const Home = () => {

    // Scroll to top function
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    // Show/hide scroll to top button based on scroll position
    const [showScrollTop, setShowScrollTop] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setShowScrollTop(window.scrollY > 300);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <>
      <main>
      {/* <Nav /> */}
      <div className={sty_home.homeMain}>
        {/* <img src={heroImg} alt="hero" /> */}
        <div className={sty_home.phase1}>


          <div className={sty_home.coverImg}>
            <img
              src={coverBack}
              alt="Top Layer"
              className={sty_home.upperImg}
              loading="lazy"
              decoding="async"
              style={{ width: "618px", height: "384px", objectFit: "cover" }}
            />
          </div>

          <div className={sty_home.textArea}>
            <h1>Dermatologist-Led Hair & Skin Treatments You Can Trust</h1>
            <p>
              Medical-grade diagnosis and personalized treatment for hair loss,
              skin conditions, and aesthetic concerns; never salon-based or
              package-driven care.
            </p>
            <div className={sty_home.textArea_button}>
              {/* <CallButton /> */}
              <div className={sty_home.buttonWrapper1} >
                <a href="tel:+917338422548" style={{ textDecoration: 'none' }}> 
                <AnimatedButton
                  buttonText="Call The Clinic"
                  bgColor="transparent"
                  textColor="white"
                  hoverBg="white"
                  hoverText="black"
                  showPopup={false}
                />
                </a>
              </div>
              <div className={sty_home.specialMobileFont}>
                <AnimatedButton
                  bgColor="#DD9233"
                  textColor="white"
                  hoverBg="rgb(205, 138, 49)"
                  hoverText="#ffffff"
                />
              </div>
            </div>
          </div>

          <div className={sty_home.tickerWrapper}>
            <div className={sty_home.ticker}>
              <span>✔ Award-Winning Dermatologist</span>
              <span>✔ 10+ Years of Ethical Clinical Practice</span>
              <span>✔ Nationally & Internationally Recognized</span>

              {/* Repeat content for smooth infinite scroll */}
              <span>✔ Award-Winning Dermatologist</span>
              <span>✔ 10+ Years of Ethical Clinical Practice</span>
              <span>✔ Nationally & Internationally Recognized</span>
            </div>
          </div>
        </div>

        {/* --------------------------------------------------------------------------- */}

        <div className={sty_home.phase2}>
          <div className={sty_home.phase2HeadText_main}>
            <div className={sty_home.phase2HeadText}>
              <h2>THE DOCTOR</h2>
              <h1>Treatment By An Award-Winning Dermatologist</h1>
            </div>
          </div>
          <div className={sty_home.mainArea}>
            <div className={sty_home.section1}>
              <p>
                {" "}
                At Dinaaz Hair & Skin Clinic, every patient is treated under the
                leadership of Dr. Nazia Iqbal, a highly experienced
                Dermatologist, Trichologist, and Cosmetologist with over 10
                years of doctor-led clinical practice. <br />
                Dr. Nazia Iqbal is nationally and internationally recognized for
                excellence in dermatology and aesthetic medicine, with proven
                expertise in:
                <ul>
                  <li>Medical skin treatments</li>
                  <li>Hair loss diagnosis and restoration</li>
                  <li>Ethical aesthetic dermatology</li>
                </ul>
              </p>
            </div>

            <div className={sty_home.sec2Andsec3}>

              <div className={sty_home.section2}>
                <img src={girlImg} alt=" Dr. Nazia Iqbal - Award-Winning Dermatologist " loading="lazy" decoding="async" style={{ maxWidth: '100%', height: 'auto' }} />
              </div>

              <div className={sty_home.section3}>
                <p>
                  Patients <b> trust Dinaaz </b> because{" "}
                  <b>
                    {" "}
                    medical decisions are always made by a qualified
                    dermatologist{" "}
                  </b>{" "}
                  , not consultants or sales staff.
                </p>
                <div className={sty_home.buttonWrapper}>
                  <AnimatedButton
                    bgColor="#ffffff13"
                    textColor="black"
                    hoverBg="rgb(21, 144, 153)"
                    hoverText="#ffffff"
                    style={{ border: "1px solid black", borderRadius: "20px" }}
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------- */}
      </div>
      </main>

        {/* <div className={sty_home.testText}>
              TEST TEXT HERE
            </div> */}
      
            {/* Floating buttons */}
            <div className={sty_home.floatingButtons}>
              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/7338422548" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={sty_home.whatsappButton}
                aria-label="Contact us on WhatsApp"
              >
<img src={whatsapp_icon} alt="whatsapp-icon" />
              </a>
      
              {/* Scroll to Top Button */}
                <button 
                  onClick={scrollToTop}
                  className={sty_home.scrollTopButton}
                  aria-label="Scroll to top"
                >
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893L13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711C13.3166 8.09763 12.6834 8.09763 12.2929 7.70711L7 2.41421L1.70711 7.70711C1.31658 8.09763 0.683417 8.09763 0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893Z" fill="#1B2021"/>
</svg>

                </button>
      
            </div>

      <HomePart2 />
    </>
  );
};

export default Home;
