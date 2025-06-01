
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

export const useAnalytics = (trackingId?: string) => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag && trackingId) {
      window.gtag('config', trackingId, {
        page_path: location.pathname + location.search,
      });
      
      console.log('Analytics: Page view tracked for', location.pathname);
    }
  }, [location, trackingId]);
};
