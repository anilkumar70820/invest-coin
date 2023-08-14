import React, { useState } from "react";
import arrow from '../assets/images/svg/Up arrow.svg'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <img className="scroll_btn" onClick={scrollToTop}
      style={{ display: visible ? "inline " : "none" }}
       src={arrow} alt="arrow" />
  );
};

export default ScrollButton;