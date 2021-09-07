/*
 * Метод window.setTimeout(callback, delay, args)
 */

console.log('До вызова setTimeout');

const logMasage = () => {
  console.log('визов callback функции через 3 секунди');
}

setTimeout(() => {
  console.log('внутри callback для setTimeout');
},
2000,)

console.log('После вызова setTimeout');

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

// const logger = time => {
//   console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
// };

// const timerId = setTimeout(logger, 2000, 2000);

// console.log(timerId);

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//   clearTimeout(timerId);
// }