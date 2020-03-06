"use strick";

(function() {
  let handleBurger = document.querySelector(".nav__toggle");
  let navMenu = document.querySelector(".nav__list");
  const cls = {
    open: "nav__toggle-burger--opened",
    close: "nav__toggle-burger--closed"
  };
  let btnClass = cls.close;

  handleBurger.addEventListener("click", function() {
    navMenu.classList.toggle("nav__menu--opened");

    if (handleBurger.classList.contains(cls.close)) {
      handleBurger.classList.remove(btnClass);
      handleBurger.classList.add(cls.open);
      btnClass = cls.open;
    }
    else if (handleBurger.classList.contains(cls.open)) {
      handleBurger.classList.remove(btnClass);
      handleBurger.classList.add(cls.close);
      btnClass = cls.close;
    }
  });
})();
