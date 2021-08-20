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

// -------------------------------------------------------------------------------------------------------------------------------------------
/*
Используя метод filter() можно выполнить фильтрацию массива так, что в нём останутся только уникальные элементы.
Этот приём работает только с массивом примитивных значений - не объектов.
Вернёмся к группе студентов и массиву всех посещаемых предметов, которые мы получили методом flatMap().
*/

const students = [
  { name: 'Манго', courses: ['математика', 'физика'] },
  { name: 'Поли', courses: ['информатика', 'математика'] },
  { name: 'Киви', courses: ['физика', 'биология'] }
];

const allCourses = students.flatMap(student => student.courses);
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

/* 
В переменной allCourses хранится массив всех посещаемых предметов, которые могут повторяться.
Задача заключается в том, чтобы сделать новый массив, в котором будут только уникальные предметы, то есть без повторений.
*/

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);

/* 
Используя array.indexOf(course) выполняем поиск первого совпадения текущего элемента course и получаем его индекс 
в оригинальном массиве всех курсов.
В параметре index хранится индекс текущего элемента course при переборе массива методом filter.
Если результат indexOf() и значение index равны - это уникальный элемент, потому что это первый 
раз когда такое значение встречается в массиве и на текущей итерации фильтр обрабатывает именно его.
*/

console.log(allCourses);
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

/*
Для элемента 'математика' под индексом 0:

indexOf() вернёт 0, потому что ищет первое совпадение.
Значение параметра index будет 0.
Они равны, значит это уникальный элемент.
Для элемента 'математика' под индексом 3:

indexOf() вернёт 0, потому что ищет первое совпадение.
Значение параметра index будет 3.
Они не равны, значит это повторяющийся - не уникальный элемент.
*/