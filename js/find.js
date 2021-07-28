
/*
 *  Array.prototype.find()
 *  -  Поелементно перебирает оригинальний массив
 *  -  Возврощяет ПЕРВИЙ (один)) елемент удовлетворяющий условию или undefined
 */

const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(number => number > 10)

console.log(number);



const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kivi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
]

/*
Ищем игрока по id
*/

const idForFind = 'player-3'

const player = players.find(player => player.id === idForFind)

console.log(player);

/*
Функция для поиска игрока по id (возврвщает результат find, map, filter)
*/

const findPayerById = (allPlayers, playerId) => {
  
  return allPlayers.find(({id}) => id === playerId)
};

console.log(findPayerById(players, 'player-3'));
console.log(findPayerById(players, 'player-6'));