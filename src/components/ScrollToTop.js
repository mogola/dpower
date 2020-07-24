import { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    console.log('scroll to top')
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
  }, []);

  return null;
}

export default ScrollToTop