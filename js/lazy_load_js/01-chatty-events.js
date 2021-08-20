/*
 * Сhatty events
 * Приемы throttling и debouncing c Lodash
 *  Fuse.js - Пушистий поиск (ишет похожие виражения)
 * https://fusejs.io/
 */

/*
 * Mousemove и throttle (для скрола, resize изменения размера окна)
 */
const coordsOutputRef = document.querySelector(".js-coords");
let mouseMoveCbInvocationCounter = 0;

// _.throttle(func, [(wait = 0)], [(options = {})]);
// содержит новую функцию которая будет визиватся на чаще чем (---мс)
const throttledOnMouseMove = _.throttle(onMouseMove, 500);

window.addEventListener("mousemove", throttledOnMouseMove);

function onMouseMove(event) {
  mouseMoveCbInvocationCounter += 1;

  coordsOutputRef.textContent = `
    Кол-во вызовов onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
}

/*
 * Input и debounce - отложений поиск - например,
 визивает функцию через нн-ое количество времени
  после завершения потока собитий.
 */

// _.debounce(func, [(wait = 0)], [(options = {})]);

const inputRef = document.querySelector(".js-input");
const outputRef = document.querySelector(".js-output");
let inputCbInvocationCounter = 0;

inputRef.addEventListener("input", _.debounse(onInputChange, 250));

function onInputChange(event) {
  inputCbInvocationCounter += 1;

  outputRef.textContent = `
    Кол-во вызовов onInputChange: ${inputCbInvocationCounter},
    Значение: ${event.target.value}
  `;
}
