// ---------------------MAP------------------------

// Array.prototype.map()
// Поелементно перебирает оригинальний масив
// Не изменяет оригинальний масив
// Возвращает новий масив такойже длини

const numbers = [5, 10, 15, 20, 25];
const doubledNums = numbers.map(function (number) {
  console.log(number);
  return 2*number
})

console.log(numbers);

console.log(doubledNums);








const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kivi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
]