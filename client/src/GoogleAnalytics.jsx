import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-102MXGE3GQ", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
}
