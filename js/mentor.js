//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива.
const styles = ['Джаж', 'Блюз']
styles.push('Рок-Рол')
// styles[1] = 'Классика'
styles.splice(1, 1, 'Классика')

// console.log(styles.shift());

// console.log(styles.unshift('Рэп', 'Регги'));

// console.log(styles);



//Напиши функцию min(a, b), которая возвращает
//меньшее из чисел a, b
//нужно добавить проверку, что функция получает числа

const minNumber = function (a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' ) {
    console.log('все погано');
    return
  }

  return a > b ? b : a

}
// console.log(minNumber(7, 5));


//Напишите функцию logItems(array) которая принимает
//массив и использует цикл for, который для каждого
//элемента массива будет выводить сообщение в формате
//<номер элемента> - <значение элемента>
//Нумерация элементов должна начинаться с 1.


const array = ['Джаз', 'Блюз', 'Рок-н-ролл', 'Регги', 'Рэп']

const logItems = function (array) {

  for (let i = 0; i < array.length; i++) {

    console.log(`${i + 1}-${array[i]}`);
    
  }

console.log(array);

}

// logItems(array)

//Вернуть отсортированную копию массива по возростанию
//не меняя исходный массив
//не использовать Array.prototype.sort()
const numbers = [7, 5, 35, 56, 12, 24, 7, 80, 3];

const sortArray = function (numbers) {
  
  for (let i = 0; i < numbers.length; i++) {

    console.group(numbers[i])

    for (let j = 0; j < numbers.length; j++) {

      console.log(numbers[j]);
      
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j]
        numbers[j] = numbers[j + 1]
        numbers[j+1] = temp
     }
      
    }
    console.groupEnd()
  }
  
  return numbers
  
}

console.log(sortArray(numbers));