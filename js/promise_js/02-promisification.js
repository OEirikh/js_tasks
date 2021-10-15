// /*
//  * Промисификация:
//  * - Поблема доступа к результату промиса с колбеком
//  * - Функция которая возвращает промис
//  */

// const makeOrder = dish => {
//   const DELAY = 1000;
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve(`✅ Вот ваш заказ: ${dish}`);
//       }

//       reject('❌ Упс, у нас закончились продукты');
//     }, DELAY);
//   });
// };

// makeOrder('пирожок').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

// /*
//  * Промисификация «синхронных» функций
//  * - Promise.resolve()
//  * - Promise.reject()
//  */

// // const makeOrder = dish => {
// //   return Promise.resolve(`✅ Вот ваш заказ: ${dish}`);
// // };

// // makeOrder('пирожок').then(onMakeOrderSuccess);

// // function onMakeOrderSuccess(result) {
// //   console.log('onMakeOrderSuccess');
// //   console.log(result);
// // }

// // function onMakeOrderError(error) {
// //   console.log('onMakeOrderError');
// //   console.log(error);
// // }

// /*
//  * Покемоны с https://pokeapi.co/
//  */

// // const fetchPokemonById = id => {
// //   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
// // };

// // fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);

// // fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);

// // fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError);

// // function onFetchSuccess(pokemon) {
// //   console.log('onFetchSuccess -> onFetchSuccess');
// //   console.log(pokemon);
// // }

// // function onFetchError(error) {
// //   console.log('onFetchError -> onFetchError');
// //   console.log('Это в блоке catch');
// //   console.log(error);
// // }

// // makePromise
// // const makePromise = () => {
// //   return new Promise((resolve, reject) => {
// //     const passed = Math.random() > 0.5;

// //     setTimeout(() => {
// //       if (passed) {
// //         resolve('✅ Куку это resolve');
// //       }

// //       reject('❌ все пропало это reject');
// //     }, 2000);
// //   });
// // };

// // makePromise()
// //   .then(result => console.log(result))
// //   .catch(error => console.log(error));

// //////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
  return new Promise((resolve, reject) => {
    const delay = randomIntegerFromInterval(200, 500);

    setTimeout(() => {
      const canProcess = Math.random() > 0.3;

      if (canProcess) {
        resolve({ id: transaction.id, time: delay });
      }
      reject(transaction.id);
    }, delay);
  });
};

const logSuccess = ({ id, time }) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

/*
 * Работает так
 */
// makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
/*
 * Должно работать так
 */
makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
