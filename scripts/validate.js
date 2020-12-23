const settingValidate = {
  formSelector: '.form',
  inputSelector: '.form__item',
  infoSelector: '.form__infoRequired',
  submitButtonSelector: '.form__submit',
  inputErrorClass: 'form__item_error',
  errorClass: '.form__error_type_',
  infoClass: 'form__infoRequired_hidden',
  previewButtonSelector: '.form__previewButton',
  commentClass: 'form__item_type_textarea'
};

const openForm = (formElement) => {
  const inputList = [...formElement.querySelectorAll(settingValidate.inputSelector)];
  formElement.reset();
  toggleButtonState(formElement, inputList);
  inputList.forEach( (inputElement) => {
    hideInputError(formElement, inputElement);
  });
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`${settingValidate.errorClass}${inputElement.name}`);
  inputElement.classList.add(settingValidate.inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`${settingValidate.errorClass}${inputElement.name}`);
  inputElement.classList.remove(settingValidate.inputErrorClass);
  if (errorElement) { 
    errorElement.textContent = '';
  };
};

const checkInputValidity = (formElement, inputElement) => {
  !inputElement.validity.valid ? showInputError(formElement, inputElement, inputElement.validationMessage) : hideInputError(formElement, inputElement);
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (formElement, inputList) => {
  const buttonElement = formElement.querySelector(settingValidate.submitButtonSelector);
  const infoElement = formElement.querySelector(settingValidate.infoSelector);
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    infoElement.classList.remove(settingValidate.infoClass);
  }else{
    buttonElement.removeAttribute('disabled');
    infoElement.classList.add(settingValidate.infoClass);
  };
  toggleButtonPreview(formElement);
};

const toggleButtonPreview = (formElement) => {
  const buttonPreview = formElement.querySelector(settingValidate.previewButtonSelector);
  formElement.elements.comment.validity.valid ? buttonPreview.removeAttribute('disabled') : buttonPreview.setAttribute('disabled', true);
};

const enableValidation = () => {
  formElement = document.querySelector(settingValidate.formSelector);
  const inputList = [...formElement.querySelectorAll(settingValidate.inputSelector)];
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () =>{
      if (inputElement.classList.contains(settingValidate.commentClass)) {
        const res = /[^А-Яа-яЁё ]/g.exec(inputElement.value);
        inputElement.value = inputElement.value.replace(res, '');
      };
      checkInputValidity(formElement, inputElement);
      toggleButtonState(formElement, inputList);
    });
  });
};

enableValidation();