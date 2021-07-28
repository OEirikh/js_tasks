/*
 *  Array.prototype.filter(функция которая должна вернуть true/false)

 *  -  Поелементно перебирает оригинальний массив
 *  -  Возвращает новий массив(с елементами или пустой)
 *  -  Добавляет в возвращаемий масив елементи удовлетворяющие условия callback функции
 *     -  если колбек вернул true елемент добавляется в возврощаемий массив
 *     -  если колбек вернул false елемент  НЕ добавляется в возврощаемий массив
 */



const numbers = [5, 10, 15, 20, 25];

const filteredNumbers = numbers.filter(number => number < 16);

console.log(filteredNumbers);   /* (3) [5, 10, 15] */
console.log(numbers, 'numbers');   /* (5) [5, 10, 15, 20, 25] "numbers" */


const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kivi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
]

/*
Получаем масив онлайн игроков
*/

const playersOnLine = players.filter(player => player.online)
console.table(playersOnLine);

/*
Получаем масив офлайн игроков
*/

const playersOfLine = players.filter(player => !player.online)
console.table(playersOfLine);


/*
Получаем масив хардкорних игроков время игри которих больше 250
*/

const hardcorPlayers = players.filter(player => player.timePlayed > 250);

console.table(hardcorPlayers)

console.table(players)