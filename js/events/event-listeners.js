/*
Собития
  - Создание и удаления Слушателей
  - Именование колбеков для Слушателей:
      - handel* : handelSubjectEvent
      - * Handler : subjectEventHandler
      - on* : onSubjectEvent !!!!
  - Ссилочная идентичность колбеков
  - Oб"ект собития (event)
  */

const targetBtn = document.querySelector(".js-target-btn");
const addListenerBtn = document.querySelector(".js-add-listener");
const removeListenerBtn = document.querySelector(".js-remove-listener");

// // - handel* : handelSubjectEvent
// function handelTargetBtnClick() {
//   console.log("Клик");
// }

// // - * Handler : subjectEventHandler
// function targetBtnClickHandler() {
//   console.log("Клик");
// }

// // - on* : onSubjectEvent
function onTargetBtnClick(event) {
  console.log(event);
  console.log("Клик");
}

// targetBtn.addEventListener("click", () => {
//   console.log("Клик");
// });

function logMasage() {
  console.log("Клик по целевой кнопке");
}

addListenerBtn.addEventListener("click", (event) => {
  console.log(event);
  console.log("Повесил слушателя на целевую кнопку");
  targetBtn.addEventListener("click", onTargetBtnClick);
});

// При удалении слушателя нужно передавть именно ссилку на внешнюю функцию (колбек)

removeListenerBtn.addEventListener("click", (event) => {
  console.log(event);
  console.log("Удалил слушателя с целевой кнопки");
  targetBtn.removeEventListener("click", onTargetBtnClick);
});
