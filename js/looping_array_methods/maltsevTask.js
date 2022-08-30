const arr = [];

for (let i = 1; i <= 100; i++) {
  arr.push(i);
}

const arrr = [-3, -1, 3];

const loopArray1 = array => {
  array.map(el => {
    if (el % 3 === 0 && el % 5 === 0) {
      console.log('ok go');
    } else if (el % 3 === 0) {
      console.log('go');
    } else if (el % 5 === 0) {
      console.log('ok');
    } else {
      console.log(el);
    }
  });
};

const loopArray2 = array => {
  array.map(el => {
    if (el <= -2) {
      console.log(-2 * el + 1);
    } else if (el > -2 && el < 3) {
      console.log(Math.pow(el, 2));
    } else if (el >= 3) {
      console.log(6);
    }
  });
};

loopArray1(arr);
loopArray2(arrr);
