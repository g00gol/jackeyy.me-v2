import { useState, useEffect } from "react";

/**
 * Hook to get window scrollY
 * @returns {number} - window scrollY
 */
export default function useWindowScroll() {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
}
