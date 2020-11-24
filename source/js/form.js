"use strict";

(function() {

  var formUpload = document.querySelectorAll(".form-js");
  var popupError = document.querySelector(".popup-error");
  var popupErrorText = document.querySelector(".popup-error__text");
  var ESC_KEYCODE = 27;
  console.log(formUpload);
 
  function resetForm() {
    formUpload.reset();
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
        var fieldEl = document.getElementById(field.fieldName);
        fieldEl.style = "border: 1px solid red";
      });

      var messages = error.response
        .map(
          ({ fieldName, errorMessage }) =>
            `${translate(fieldName)}: ${translate(errorMessage)}`
        )
        .join("\n");

      alert(messages);
    }

    openError();
  }

  formUpload.addEventListener("submit", function onFormSubmit(evt) {
    window.saveForm(new FormData(formUpload), resetForm, errorHandler);
    evt.preventDefault();
  });
})();
