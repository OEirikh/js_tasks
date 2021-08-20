
// ---------------------------------------------------------------------FOREACH-------------------------------------------------------------------------------------

// Array.prototype.forEach(callback(currentValue, index, array), thisArg - обект в контексте которого визивается callback)
//   - Поелементно перебирает оригинальний массив
//   - Ничего не возвращает
//   - Заменяет класический for(for(of)), если не нужно преривать цикл
// Единственным случаем, когда стоит использовать циклы for или for...of для перебора массива,
//  это задачи с прерыванием выполнения цикла.
// Прервать выполнение метода forEach нельзя, он всегда перебирает массив до конца.



const numbers = [10, 5, 2, 7, 3, 45]

numbers.forEach(function (number, index, array) {
  console.log('number', number);
  // console.log(this);
},
  // { a: 5, b: 10}
);
  
// ---  из FOR В FOREACH ---

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   // Пиши код выше этой строки
//   return totalPrice;
// }

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  orderedItems.forEach(function (orderedItem){
    totalPrice += orderedItem;
  })

  // Пиши код выше этой строки
  return totalPrice;
}

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] > value) {
//         filteredNumbers.push(numbers[i]);
//       }
//     }
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
// }
  
function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
  
  numbers.forEach(function (number) {
      if (number > value) {
        filteredNumbers.push(number);
      }
    })
  
    // Пиши код выше этой строки
    return filteredNumbers;
}
  
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
//     for (let i = 0; i < firstArray.length; i += 1) {
//       if (secondArray.includes(firstArray[i])) {
//         commonElements.push(firstArray[i]);
//       }
//     }
  
//     return commonElements;
//     // Пиши код выше этой строки
// }
  
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  
  firstArray.forEach(function (firstArrayItem) {
    if (secondArray.includes(firstArrayItem)) {
        commonElements.push(firstArrayItem);
      }
  })
    
  
    return commonElements;
    // Пиши код выше этой строки
  }


