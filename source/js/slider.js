"use strict";

let slider = new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  perView: 2,
  autoplay: 3000,
  gap: 30,
  breakpoints: {
    4096: {
      perView: 3,
    },
    900: {
      perView: 2,
    },
    500: {
      perView: 1,
    },
  },
  
});

slider.mount();
