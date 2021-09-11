/*
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log('До вызова setTimeout');

// setTimeout((x) => {
//   console.log(x);
//   console.log('внутри callback для setTimeout_1');
// },
// 3000, 5)

// setTimeout((x, y) => {
//   console.log(x, y);
//   console.log('внутри callback для setTimeout_2');
// },
// 2000,10, 20)

// console.log('После вызова setTimeout');

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const logger = time => {
  console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
};


// const 'timerId' - Присваивается при создании setTimeout -
//   (уникальное число с шагом в 1) для отмени таймера

const timerId = setTimeout(logger, 2000, 2000);

console.log(timerId);

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  clearTimeout(timerId);
}