/*
 * - собитие Submit
 * - Действие браузера по умолчанию
 * - Свойство elements
 * - Клас FormData - https://developer.mozilla.org/ru/docs/Web/API/FormData
 */

const form = document.querySelector(".js-register-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  // сброс действий браузера по умолчанию
  event.preventDefault();

  // event.currentTarget - (Текущая цель) силается та тот елемент которий прослушивает собитие
  console.dir(event.currentTarget);
  // <form class=​"js-register-form" autocomplete=​"on">​…​</form>​

  // event.currentTarget.elements - есть только у <form>, доступ к елементам и их значениям форми.

  console.log(event.currentTarget.elements.email.value);
  console.log("Сабмит форми");

  // FormData - Для сбора данних с форми
  const formData = new FormData(event.currentTarget);
  console.log(formData);

  formData.forEach((value, name) => {
    console.log("onFormSubmit -> name", name);
    console.log("onFormSubmit -> value", value);
  });
}
