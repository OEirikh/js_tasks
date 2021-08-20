// ---------------------------------------------------------MAP--------------------------------------------------------------------------------

// Array.prototype.map()
// Поелементно перебирает оригинальний масив
// Не изменяет оригинальний масив
// Возвращает новий масив такой же длини

const numbers = [5, 10, 15, 20, 25];

const doubledNums = numbers.map((number) => {
  console.log(number);

  return 3 * number;
});

console.log(numbers);
console.log(doubledNums);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kivi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

// ---------------------------возврощает новий масив обектов с определенними свойствами обектов оригинального масива:

// возвращает масив с именами игроков
const playersName = players.map((player) => {
  return player.name;
});
console.log(playersName);

// возвращает масив с обєктами имен и id игроков
const playersId = players.map((player) => player.id);
console.log(playersId);

const res = players.map((player) => {
  return {
    name: player.name,
    id: player.id,
  };
});

// такая же запись в одну строку:
// const res = players.map(({ name, online }) => ({ name, online }))
// console.log(res);

// ------------------------------------------------Увеличивает кoличество поинтов каждого игрока------------------------------
const updatedPlayers = players.map((player) => {
  return {
    ...player,
    points: player.points * 1.1,
  };
});

// -----тоже самое - return{} => ({})

// const updatedPlayers = players.map((player) => ({
//     ...player,
//     points: player.points * 1.1
// }))
console.table(updatedPlayers);

// ------------------------------------------------Увеличивает количество часов игрока по id-----------------------------------

const playerIdToUpdate = "player-3";

const updatePlayers = players.map((player) => {
  if (playerIdToUpdate === player.id) {
    // возвращает новий масив и меняет значения свойства найденого игрока
    return {
      // распиление старого обекта масива
      ...player,
      // изменения свойства
      timePlayed: player.timePlayed + 100,
    };
  }
  // возврвщает ссилку на старий обект, если ничего не меняется
  return player;
});

//----- тоже самое записаное тернарним оператороом: // //

// const updatePlayers = players.map(player =>
//   playerIdToUpdate === player.id
//     ? { ...player, timePlayed: player.timePlayed + 100, }
//     : player,
// )
console.table(updatePlayers);
