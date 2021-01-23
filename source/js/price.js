"use strict";

(function () {
  let elements = document.querySelectorAll(".price__item");

  elements.forEach((item) =>
    item.addEventListener("click", function () {
      if (this.classList.contains("price__item-active")) {
        this.classList.remove("price__item-active");
      } else {
        elements.forEach((child) =>
          child.classList.remove("price__item-active")
        );
        this.classList.add("price__item-active");
      }
    })
  );
})();
