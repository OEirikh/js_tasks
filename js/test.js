const fishes = ['скумбрия', 'окунь', 'карась', 'щука'];
for (const fish of fishes) {
  console.log(fish);
}


for (let i = 0; i <= 10; i += 1) {
  console.log(i);
}
const message = 'Welcome to Bahamas!';

// Разбивает строку по разделителю, в данном случае это пробел
console.log(message.split(' ')); // ["Welcome", "to", "Bahamas!"]

// Вызов split с пустой строкой разобьёт по буквам
console.log(message.split('')); // [много букв :)]

const fruit = 'apple';

if (fruit === 'apple' || fruit === 'strawberry') {
  console.log('It is a red fruit!');
}


function getExtremeElements(array) {

  // const lastIndex = array.length -1;
  // const firstElement = array[0];
  // const lastElement = array[array.length -1];
  console.log([array[0], array[array.length - 1]]);

}

getExtremeElements(['скумбрия', 'окунь', 'карась', 'щука'])