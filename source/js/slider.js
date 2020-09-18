"use strict";

let slider = new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 2,
  autoplay: 3000,
  breakpoints: {
    1024: {
      perView: 2,
    },
    768: {
      perView: 1,
    },
  },
  
});

slider.mount();
