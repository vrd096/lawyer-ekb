"use strict";

(function() {
  window.addEventListener("load", function() {
    let sliderImgTwo = document.querySelector(".js-slider-two");
    let sliderTitleOne = document.querySelector(".js-slider-title-one");
    let sliderTitleTwo = document.querySelector(".js-slider-title-two");
    let sliderLineOne = document.querySelector(".js-slider-line-one");
    let sliderLineTwo = document.querySelector(".js-slider-line-two");
    let sliderSubtitleOne = document.querySelector(".js-slider-subtitle-one");
    let sliderSubtitleTwo = document.querySelector(".js-slider-subtitle-two");
    let wrapperOne = document.querySelector(".main-header__slider-block-one");
    let wrapperTwo = document.querySelector(".main-header__slider-block-two");
    let NumberSlide = document.querySelector(".main-header__slider-pages");
    let arrowLeft = document.querySelector(".main-header__slider-arrows-left");
    let arrowRight = document.querySelector(
      ".main-header__slider-arrows-right"
    );

    function nextPage(item) {
      let nextSlide = "";
      if (item.textContent == "01/02") {
        nextSlide = "02/02";
      }
      if (item.textContent == "02/02") {
        nextSlide = "01/02";
      }
      item.textContent = nextSlide;
    }

    function nextBacgroundImage() {
      sliderImgTwo.classList.toggle("main-header__slider-show");
    }
    function changeBlock(item) {
      item.classList.toggle("main-header__slider-block--show");
    }
    function transformText(item) {
      item.classList.toggle("main-header__slider--transform");
    }

    const sliderTimer = time => {
      return new Promise((resolve, reject) => setTimeout(resolve, time));
    };

    function startSlider() {
      sliderTimer(0)
        .then(() => {
          nextPage(NumberSlide);
          nextBacgroundImage();
          changeBlock(wrapperOne);
          changeBlock(wrapperTwo);
          return sliderTimer(0);
        })
        .then(() => {
          transformText(sliderTitleOne);
          transformText(sliderTitleTwo);
          return sliderTimer(1000);
        })
        .then(() => {
          transformText(sliderLineOne);
          transformText(sliderLineTwo);
          transformText(sliderSubtitleOne);
          transformText(sliderSubtitleTwo);
          return sliderTimer(0);
        });
    }

    let handle;

    function updateInterval() {
      clearInterval(handle);
      handle = setInterval(startSlider, 10000);
    }
    updateInterval();

    arrowLeft.addEventListener("click", function() {
      startSlider();
      updateInterval();
    });
    arrowRight.addEventListener("click", function() {
      startSlider();
      updateInterval();
    });
  });
})();
