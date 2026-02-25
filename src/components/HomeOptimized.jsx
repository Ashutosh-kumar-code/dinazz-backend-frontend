import React, { useEffect, useState, lazy, Suspense } from "react";
import sty_home from "./Home.module.css";
import AnimatedButton from "./AnimatedButton";

// Lazy load heavy components
const HomePart2 = lazy(() => import("./HomePart2"));

// Optimized image loading with intersection observer
const OptimizedImage = ({ src, alt, className, style, priority = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = React.useRef();

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={imgRef} className={className} style={style}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          style={{
            ...style,
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease'
          }}
        />
      )}
    </div>
  );
};

const Home = () => {
  // Scroll to top function with throttling
  const scrollToTop = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Show/hide scroll to top button based on scroll position
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let timeoutId;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setShowScrollTop(window.scrollY > 300);
      }, 16); // ~60fps
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Memoize static content to prevent re-renders
  const tickerContent = React.useMemo(() => (
    <>
      <span>✔ Award-Winning Dermatologist</span>
      <span>✔ 10+ Years of Ethical Clinical Practice</span>
      <span>✔ Nationally & Internationally Recognized</span>
      <span>✔ Award-Winning Dermatologist</span>
      <span>✔ 10+ Years of Ethical Clinical Practice</span>
      <span>✔ Nationally & Internationally Recognized</span>
    </>
  ), []);

  return (
    <>
      <main>
        <div className={sty_home.homeMain}>
          <div className={sty_home.phase1}>
            <div className={sty_home.coverImg}>
              <OptimizedImage
                src="/assets/coverBack.png"
                alt="Top Layer"
                className={sty_home.upperImg}
                style={{ width: "618px", height: "384px", objectFit: "cover" }}
                priority={true} // Load hero image immediately
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
                <div className={sty_home.buttonWrapper1}>
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
                {tickerContent}
              </div>
            </div>
          </div>

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
                  <OptimizedImage
                    src="/assets/doc-Photoroom 1.png"
                    alt="Dr. Nazia Iqbal - Award-Winning Dermatologist"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>

                <div className={sty_home.section3}>
                  <p>
                    Patients <b> trust Dinaaz </b> because{" "}
                    <b>
                      {" "}
                      medical decisions are always made by a qualified
                      dermatologist{" "}
                    </b>
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
        </div>
      </main>

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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
            <path d="M16.001 2.667c-7.36 0-13.334 5.973-13.334 13.333 0 2.352.613 4.648 1.777 6.678L2.667 29.333l6.88-1.755a13.25 13.25 0 006.454 1.689h.006c7.36 0 13.333-5.973 13.333-13.333 0-7.36-5.973-13.333-13.339-13.333zm0 24c-2.09 0-4.142-.56-5.944-1.621l-.426-.253-4.082 1.041 1.09-3.98-.278-.459A10.646 10.646 0 015.334 16c0-5.88 4.786-10.667 10.667-10.667 5.88 0 10.666 4.787 10.666 10.667 0 5.88-4.786 10.667-10.666 10.667zm5.853-8.02c-.32-.16-1.893-.934-2.186-1.04-.293-.107-.506-.16-.72.16-.213.32-.826 1.04-1.013 1.254-.187.213-.373.24-.693.08-.32-.16-1.35-.497-2.572-1.584-.95-.846-1.592-1.893-1.778-2.213-.187-.32-.02-.493.14-.653.144-.144.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.626-.526-.54-.72-.547l-.613-.013c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.666 0 1.573 1.146 3.093 1.306 3.306.16.213 2.256 3.44 5.467 4.823.764.33 1.36.527 1.826.674.767.244 1.466.21 2.02.127.616-.092 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" fill="#25D366"/>
          </svg>
        </a>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className={sty_home.scrollTopButton}
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 19V5M12 5L6 11M12 5L18 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>

      {/* Lazy load HomePart2 */}
      <Suspense fallback={
        <div style={{ textAlign: 'center', padding: '50px', color: '#666' }}>
          Loading more content...
        </div>
      }>
        <HomePart2 />
      </Suspense>
    </>
  );
};

export default Home;
