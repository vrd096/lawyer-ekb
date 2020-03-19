"use strict";

(function() {
  const nav = document.querySelector(".js-navigation");
  const headerSlider = document.querySelector(".main-header__slider-container");
  let scroll = false;

  function toggleScroll() {
    if (!scroll && window.pageYOffset > 50) {
      scroll = true;
      nav.classList.add("nav-is-scroll");
      // console.log("show");
      // headerSlider.classList.add("main-header__slider-container--margin");
    } else if (scroll && window.pageYOffset <= 50) {
      scroll = false;
      nav.classList.remove("nav-is-scroll");
      // headerSlider.classList.remove("main-header__slider-container--margin");
    }
  }

  window.addEventListener("scroll", toggleScroll);
})();
