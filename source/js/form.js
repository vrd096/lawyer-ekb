"use strict";

(function() {
  let modelSend = document.querySelector(".modal-send");
  let formUpload = document.querySelector(".footer__feedback-form");
  let formConsul = document.querySelector(".modal-send__form");
  let popupError = document.querySelector(".popup-error");
  let popupErrorText = document.querySelector(".popup-error__text");
  let ESC_KEYCODE = 27;

 
  function resetForm() {
    formUpload.reset();
    formConsul.reset();
  }

  function handleEsq({ keyCode }) {
    if (keyCode === ESC_KEYCODE) {
      closeError();
    }
  }

  function closeError() {
    popupError.classList.add("visually-hidden");

    popupError
      .querySelector(".popup-error__close")
      .removeEventListener("click", closeError);
    document.removeEventListener("keyup", handleEsq);
  }

  function openError() {
    popupError.classList.remove("visually-hidden");

    popupError
      .querySelector(".popup-error__close")
      .addEventListener("click", closeError);
    document.addEventListener("keyup", handleEsq);
  }


  // function translate(text) {
  //   return translations[text] || text;
  // }

  function errorHandler(error) {
    popupErrorText.textContent = error.message;

    if (error.status === 400) {
      error.response.forEach(function(field) {
        let fieldEl = document.getElementById(field.fieldName);
        fieldEl.style = "border: 1px solid red";
      });

      let messages = error.response
        .map(
          ({ fieldName, errorMessage }) =>
            `${translate(fieldName)}: ${translate(errorMessage)}`
        )
        .join("\n");

      alert(messages);
    }

    openError();
  }
  function closeConsul() {
    modelSend.classList.add("visually-hidden");
  }

  formUpload.addEventListener("submit", function onFormSubmit(evt) {
    window.saveForm(new FormData(formUpload), resetForm, errorHandler);
    evt.preventDefault();
  });
  formConsul.addEventListener("submit", function onFormSubmit(evt) {
    window.saveForm(new FormData(formConsul), resetForm, errorHandler);
    evt.preventDefault();
    closeConsul();
  });
})();
