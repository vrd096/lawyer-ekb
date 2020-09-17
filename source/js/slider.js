"use strict";

let slider = new Glide('.glide', {
	type: 'carousel',
	startAt: 0,
	perView: 2,
	autoplay: 3000
  });

slider.mount();
