import { useState, useEffect, useRef } from 'react';

// Custom hook for intersection observer with performance optimizations
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);
        
        // Track if element has ever intersected
        if (isElementIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px', // Start loading 50px before element comes into view
        ...options
      }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [hasIntersected, options.threshold, options.rootMargin]);

  return { targetRef, isIntersecting, hasIntersected };
};

// Throttled scroll hook for performance
export const useThrottledScroll = (callback, delay = 16) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setLastScrollY(window.scrollY);

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          callback(lastScrollY);
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback, delay]);

  return lastScrollY;
};

// Optimized image loading hook
export const useImageOptimization = () => {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const preloadImage = (src) => {
    if (loadedImages.has(src)) return Promise.resolve();

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, src]));
        resolve();
      };
      img.onerror = reject;
      img.src = src;
    });
  };

  const preloadCriticalImages = async (imageUrls) => {
    try {
      await Promise.all(imageUrls.map(preloadImage));
    } catch (error) {
      console.warn('Some images failed to preload:', error);
    }
  };

  return { preloadImage, preloadCriticalImages, loadedImages };
};
