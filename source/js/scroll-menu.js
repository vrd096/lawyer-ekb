"use strict";

(function() {
  let nav = document.querySelector(".nav");
  let list  = document.querySelector(".nav__list");

  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 50) {
      nav.classList.add("nav-is-scroll");
    } else {
      nav.classList.remove("nav-is-scroll");
    }


  });





})();
