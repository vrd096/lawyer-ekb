"use strict";

(function () {
  let modelSend = document.querySelector(".modal-send");
  let modelOverlay = document.querySelector(".modal-overlay");
  let callButtons = document.querySelectorAll(".js-consultation");
  let consultationButton = document.querySelector(".nav__consultation");
  let modalClose = document.querySelector(".modal-send__close");
  const ESC_KEYCODE = 27;
  
  window.closeModal = function closeModal() {
    modelSend.classList.add("visually-hidden");
    modelOverlay.classList.add("visually-hidden");

    document.removeEventListener("keyup", handleCardEsc);
  };

  function showModal() {
    modelSend.classList.remove("visually-hidden");
    modelOverlay.classList.remove("visually-hidden");

    document.addEventListener("keyup", handleCardEsc);
  }

  function handleCardEsc({ keyCode }) {
    if (keyCode === ESC_KEYCODE) {
      closeModal();
    }
  }
  consultationButton.addEventListener("click", showModal);
  callButtons.forEach((item) => item.addEventListener("click", showModal));
  modalClose.addEventListener("click", closeModal);
})();
