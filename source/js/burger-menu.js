"use strick";

(function() {
  let handleBurger = document.querySelector(".nav__toggle");
  let navMenu = document.querySelector(".nav__list");
  let navCart = document.querySelector(".nav__cart");

  handleBurger.addEventListener("click", function() {
    navMenu.classList.toggle("nav__menu--opended");
    navCart.classList.toggle("nav__menu--opended");
    handleBurger.classList.toggle("nav__toggle-burger--opened");
  });
})();
