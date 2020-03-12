"use strict";

(function() {
  window.addEventListener("load", function() {
    let sliderImgTwo = document.querySelector(".js-slider-two");
    let sliderTitle = document.querySelector(".js-slider-title");

    function nextBacgroundImage() {
      sliderImgTwo.classList.toggle("main-header__slider-show");
    }
    function nextTitle() {
      sliderTitle.classList.add("main-header__slider-title--show");
    }
    const delay = time => {
      return new Promise((resolve, reject) => setTimeout(resolve, time));
    };

    delay(3000) // через 100 мс
      .then(() => {
        nextBacgroundImage();
        return delay(2000); // через 200 мс
      })
      .then(() => {
        nextTitle();
        return delay(1000); // через 150 мс
      })
      .then(() => {
        console.log("3й шаг");
      });
  });
})();
