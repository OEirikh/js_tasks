

//  cykle for of

const fishes = ['скумбрия', 'окунь', 'карась', 'щука'];
for (const fish of fishes) {
  // console.log(fish);
}


const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  // console.log(planet);
}

// з for в for of

function calculateTotalPrice(order) {
  let total = 0;

  // for (let i = 0; i < order.length; i += 1) {
  //   total += order[i];
  // }

  for (const num of order) {
    total += num;
  }

  // console.log(total);;
}

calculateTotalPrice([12, 85, 37, 4])


function filterArray(numbers, value) {

  const filteredNumbers = [];

  // for (let i = 0; i < numbers.length; i += 1) {
  //   const number = numbers[i];

  //   if (number > value) {
  //     filteredNumbers.push(number);
  //   }
  // }

  for (const number of numbers) {
    if (number > value) {

      filteredNumbers.push(number);
    }
    // console.log(filteredNumbers);;

  }
}
filterArray([1, 2, 3, 4, 5], 4)


// cycle for

for (let i = 0; i <= 10; i += 1) {
  // console.log(i);
}
const message = 'Welcome to Bahamas!';

// Разбивает строку по разделителю, в данном случае это пробел
// console.log(message.split(' ')); // ["Welcome", "to", "Bahamas!"]

// Вызов split с пустой строкой разобьёт по буквам
// console.log(message.split('')); // [много букв :)]

const fruit = 'apple';

if (fruit === 'apple' || fruit === 'strawberry') {
  // console.log('It is a red fruit!');
}



// Перший і останній індекс масиву

function getExtremeElements(array) {

  // const lastIndex = array.length -1;
  // const firstElement = array[0];
  // const lastElement = array[array.length -1];

  // console.log([array[0], array[array.length - 1]]);

}

getExtremeElements(['скумбрия', 'окунь', 'карась', 'щука'])


// slug

function slugify(title) {
  // Change code below this line
  const slug = title.toLowerCase().split(" ").join("-");

  // console.log(slug)

}

slugify("Arrays for begginers")

// сумма чисел від 0 до number

function calculateTotal(number) {

  let y = 0;

  for (let i = 0; i <= number; i += 1) {

    y += i;
  }
  // console.log(y);
}
calculateTotal(22);


// Задача: чётные числа
function getEvenNumbers(start, end) {

  let ewenNum = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      ewenNum.push(i)
    }
  }
  // console.log(ewenNum);

}

getEvenNumbers(3, 11)



// пошук найдовшого слова

function findLongestWord(string) {
  let longestWord = ''
  const arrayWords = string.split(' ');

  for (let i = 0; i < arrayWords.length; i += 1) {

    longestWord = longestWord.length > arrayWords[i].length ?

      longestWord : arrayWords[i];

  }
  // console.log(longestWord);

}

findLongestWord("The quick brown fox jumped over the lazy dog")

// Задача: общие элементы

function getCommonElements(array1, array2) {

  const newElements = [];
  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      newElements.push(array1[i])
    }
  }
  // console.log(newElements);


}
getCommonElements([1, 2, 3], [2, 1, 17, 19])


