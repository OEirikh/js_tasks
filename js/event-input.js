/*
Патерн "Об'єкт ссилок"
Собития :
- focus и blur
- input и  собитие change
onInputChange
- checkbox и свойство checked
*/

// Патерн "Об'єкт ссилок"
// const input = document.querySelector(".js-input");
// const nameLabel = document.querySelector(".js-button > span");
// const license = document.querySelector(".js-lisense");
// const btn = document.querySelector(".js-button");

const refs = {
  input: document.querySelector(".js-input"),
  nameLabel: document.querySelector(".js-button > span"),
  licenseCheckbox: document.querySelector(".js-license"),
  btn: document.querySelector(".js-button"),
};

// refs.input.addEventListener("focus", onInputFocus);
// refs.input.addEventListener("chenge", onInputChange);
refs.input.addEventListener("input", onInputInput);
refs.licenseCheckbox.addEventListener("change", onLicenseChange);

// - focus
function onInputFocus() {
  console.log("инпут получил фокус - собитие focus");
}
// -  blur
function onInputBlur() {
  console.log("Инпут потерял фокус - собитие blur");
}

// input и  собитие change использовать только на чекбоксах
function onInputChange(event) {
  console.log(event.currentTarget.value);
}

// Для текстових полей, text area использовать  собитие input
function onInputInput(event) {
  console.log(event.currentTarget.value);
}

// checkbox и свойство checked -Возвращает буль true или false
// (нажат или ненажат чекбокс)
// есть на инпутах type 'checkbox' и type="radio" (radio btn?)
function onLicenseChange(event) {
  console.log(event.currentTarget.checked);
  console.log(refs.btn.disabled);
  refs.btn.disabled = !event.currentTarget.checked;
}
