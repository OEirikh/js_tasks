/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/

//  Создание
const date = new Date();
console.dir(date);

// Unix время - количество милисекунд прошедших с 1 января 1970р. 00:00
console.log(date.getTime());
// Что би не создавать лишних обектов для получения дати
// или сравнения дат - Date.now()
const date1 = Date.now();
console.log('date1', date1);
// date1 1631528317905

setTimeout(() => {
  const date2 = Date.now();

  console.log('date1', date1);
  // date1 1631528317905
  console.log('date2', date2);
  // date2 1631528367160
  console.log(date2 - date1);
  // время ето число, их можно отнимать друг от друга
  // 3005
}, 3000);
