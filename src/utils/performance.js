// Performance utilities for home page optimization

// Debounce function for scroll events
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for performance
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Lazy load images with intersection observer
export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    '/assets/coverBack.png',
    '/assets/doc-Photoroom 1.png'
  ];

  criticalResources.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};

// Optimize web vitals
export const measureWebVitals = () => {
  // Largest Contentful Paint
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      console.log('LCP:', entry.startTime);
    }
  }).observe({entryTypes: ['largest-contentful-paint']});

  // First Input Delay
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      console.log('FID:', entry.processingStart - entry.startTime);
    }
  }).observe({entryTypes: ['first-input']});

  // Cumulative Layout Shift
  let clsValue = 0;
  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    }
    console.log('CLS:', clsValue);
  }).observe({entryTypes: ['layout-shift']});
};

// Memory management
export const cleanup = () => {
  // Clean up event listeners
  const elements = document.querySelectorAll('[data-cleanup]');
  elements.forEach(el => {
    const eventType = el.dataset.cleanup;
    el.removeEventListener(eventType, el.handler);
  });
};

// Optimize font loading
export const optimizeFontLoading = () => {
  const fontDisplay = document.createElement('style');
  fontDisplay.innerHTML = `
    @font-face {
      font-family: 'Instrument Sans';
      font-display: swap;
      src: url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;700&display=swap');
    }
  `;
  document.head.appendChild(fontDisplay);
};

// Reduce JavaScript execution time
export const deferNonCriticalJS = () => {
  const scripts = document.querySelectorAll('script[data-defer]');
  scripts.forEach(script => {
    script.defer = true;
  });
};

// Service worker registration for caching
export const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js');
      console.log('Service Worker registered:', registration);
    } catch (error) {
      console.log('Service Worker registration failed:', error);
    }
  }
};
