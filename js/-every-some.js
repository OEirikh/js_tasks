const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kivi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
]

/*
 *  Array.prototype.every()
 *  -  Поелементно перебирает оригинальний массив
 *  -  Возврощяет true ЕСЛИ ВСЕ елементи масива удовлетворяют условию
 */

const isAllOnline = players.every(player => player.online);
console.log(isAllOnline);

/*
 *  Array.prototype.some()
 *  -  Поелементно перебирает оригинальний массив
 *  -  Возврощяет true ЕСЛИ ХОТЯ БИ ОДИН елементи масива удовлетворяют условию
 */

const isAnyOnline = players.some(player => player.online)
console.log(isAnyOnline);