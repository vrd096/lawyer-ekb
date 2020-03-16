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
    let nextSlide = "";
    function nextPage(item) {
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
    function nextTitle() {
      sliderTitleOne.classList.toggle("main-header__slider-title--show");

      sliderTitleTwo.classList.toggle("main-header__slider-title--show");
    }
    function changeBlock(item) {
      item.classList.toggle("main-header__slider-block--show");
    }
    function transformText(item) {
      item.classList.toggle("main-header__slider--transform");
    }
    // function showBlock(item) {
    //   item.classList.add("main-header__slider-block--show");
    // }

    const sliderTimer = time => {
      return new Promise((resolve, reject) => setTimeout(resolve, time));
    };

    window.setInterval(function() {
      sliderTimer(3000)
        .then(() => {
          nextPage(NumberSlide);
          nextBacgroundImage();
          changeBlock(wrapperOne);
          changeBlock(wrapperTwo);
          return sliderTimer(1000);
        })
        .then(() => {
          transformText(sliderTitleOne);
          transformText(sliderTitleTwo);
          return sliderTimer(1000);
        })
        .then(() => {
          transformText(sliderLineOne);
          transformText(sliderLineTwo);
          return sliderTimer(100);
        })
        .then(() => {
          transformText(sliderSubtitleOne);
          transformText(sliderSubtitleTwo);
        });
    }, 10000);
  });
})();
