import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    // Only scroll if pathname actually changed
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      
      // Use requestAnimationFrame to ensure DOM is ready, then smooth scroll
      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;

