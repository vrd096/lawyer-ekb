"use strict";

(function() {
  window.addEventListener("load", function() {
    let sliderImgTwo = document.querySelector(".js-slider-two");
    let sliderTitleOne = document.querySelector(".js-slider-title-one");
    let sliderTitleTwo = document.querySelector(".js-slider-title-two");
    let wrapperOne = document.querySelector(".main-header__slider-block-one");
    let wrapperTwo = document.querySelector(".main-header__slider-block-two");

    function nextBacgroundImage() {
      sliderImgTwo.classList.toggle("main-header__slider-show");
    }
    function nextTitle() {

      sliderTitleOne.classList.toggle("main-header__slider-title--show");

      sliderTitleTwo.classList.toggle("main-header__slider-title--show");
    }
    function hideBlock () {
      wrapperOne.classList.toggle("main-header__slider-block--show");
    }
    function showBlock () {
      wrapperTwo.classList.toggle("main-header__slider-block--show");
    }

    const sliderTimer = time => {
      return new Promise((resolve, reject) => setTimeout(resolve, time));
    };

    window.setInterval(function() {
      sliderTimer(3000)
        .then(() => {
          nextBacgroundImage();
          hideBlock();
          return sliderTimer(2000);
        })
        .then(() => {
          showBlock ()
          // nextTitle();
          return sliderTimer(1000);
        })
        .then(() => {
          console.log("3й шаг");
        });
    }, 5000);
  });
})();
