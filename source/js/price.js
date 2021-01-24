"use strict";

(function () {
  let elements = document.querySelectorAll(".price__item");

  elements.forEach((item) =>
    item.childNodes[1].addEventListener("click", function () {
      
      if (item.classList.contains("price__item-active")) {
        item.classList.remove("price__item-active");
      } else {
        elements.forEach((child) =>
          child.classList.remove("price__item-active")
        );
        item.classList.add("price__item-active");
      }
    })
  );
})();
