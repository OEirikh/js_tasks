/*
 *  Array.prototype.reduce()

        Array.reduce((previousValue, element, index, array) => {
          // Тело коллбек-функции
        }, initialValue);

 *  -  Поелементно перебирает оригинальний массив
 *  -  Возврощяет что угодно 🤯
 *  -  Заменяет все насвете, использовать с умом
 *  -  "Берет много и из етого много делает что то одно"
 */

const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce((acc, number) => acc + number, 0);
console.log(total);

// acc - акумулятор(передається від ітерації до ітерації) початкове значення задається другим аргументом після колбек функції,
//   якщо не задати то значення першого елемента масива :

// acc = 0 -> number = 5 -> return 0 + 5
// acc = 5 -> number = 10 -> return 5 + 10
// acc = 15 -> number = 15 -> return 15 + 15
// acc = 30 -> number = 20 -> return 30 + 20
// acc = 50 -> number = 25 -> return 50 + 25

// # После того как весь массив перебран, метод reduce() возвращает значение аккумулятора.
//   Результат - 75

// То есть метод reduce() используется когда необходимо взять «много» и привести к «одному».
// В повседневных задачах его применение сводится к работе с числами.

/*
 * Считаем общую зарплату
 */

const salary = {
  mango: 5,
  poly: 100,
  ajax: 150,
};

const totalSalary = Object.values(salary).reduce(
  (total, salary) => total + salary,
  0,
);
console.log(totalSalary);

/*
 * Считаем общее количество часов
 */

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kivi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const totalTimePlayed = players.reduce(
  (total, player) => total + player.timePlayed,
  0,
);

console.log(totalTimePlayed);

// передивитись кінець відео!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const sum = (...args) =>
  `Sum is equal ${args.reduce((start, arg) => start + arg, 0)}`;

console.log(sum(12, 23, 32)); // Sum is equal 67
