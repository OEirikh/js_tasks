
// Функція КОНСТРУКТОР

const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
}
console.log(User, 'Конструктор');

console.log(User.prototype, 'Прототип конструктора');

User.prototype.changeEmail = function (newMail) {
  this.email = newMail;
}
User.prototype.changePassword = function (newPassword) {
  this.password = newPassword;
}

const petya = new User({ email: 'petya.p@mail.com', password: 111111, });

console.log(petya, 'Екземпляр');

petya.changeEmail('my_new-mail@mail.com');

console.log(petya, 'Екземпляр');


// Статичні свойства і методи

User.message = 'Статическое свойство'

User.logInfo = function (obj) {
  console.log(obj);
}

console.log(User.message);
// --

const ivan = new User({ email: 'ivan.i@mail.com', password: 222222, });

console.log(ivan);

ivan.changeEmail('nev-ivan@mail.com')

console.log(ivan);

// --КЛАСИ--

class Car {

  static description = ('Description model, Статичне свойство - Доступнt тільки в функції-конструкторі');

  static getPrice (){
    console.log(this.prise, 'статичний метод - Доступний тільки в функції-конструкторі');
  }
// Приватне свойство - буде на кожному екземплярі.
  #test = 'test'

  constructor({brand, model, price} = {}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  
  chengePrice(newPrice) {

// Доступ до #test є, але перезаписати його не можна.
    this.prise = newPrice;

    console.log('публічний метод');
    console.log(this.#test);
  }

}
console.log(Car);
console.dir(Car)

const opel = new Car ({
  brand: 'Opel',
  model: 'Vectra C',
  price: '8000',
});

console.log(opel);

console.log(Object.getPrototypeOf(opel) === Car.prototype)

console.log(Car.description);

opel.chengePrice(7500,);

console.log(opel);



// -------------------------



 class StringBuilder {    
  #value;

  constructor(baseValue = 0) {
    this.#value = baseValue;
  }
  

    // - Геттер
   
  get Value() {
    return this.#value;
   };
   
    // - Сеттер

  set Value(newValue) {
    this.#value = newValue;
   };

  padEnd(str) {
    this.#value += str;
  };

  padStart(str) {
    this.#value = str + this.#value;
  };

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  };
 }


const value = new StringBuilder(15);

// console.log(value.Value(35));
console.log(value.Value);

// ---------------------------Наследование-------------------------

class Hero {

  constructor(name = 'hero', xp = 0){
    this.name = name;
    this.xp = xp;
  }

  gainxp(amount) {
    console.log(`${this.name} получает ${amount} опита`);
    this.xp += amount;
  }
}
// ---ребенок---------родитель
class Warrior extends Hero   {

  constructor(name, xp, weapon) {
    // -обезательний визов конструктора родителя'super(передаются свойств)'
    super(name, xp);
    this.weapon = weapon;
  } 
}

const mango = new Warrior('mango', 1000, 'алебарда')

console.log(mango);

mango.gainxp(500)

console.log(mango.__proto__ === Warrior.prototype);

console.log('Warrior.prototype', Warrior.prototype);

console.log(Warrior.prototype.__proto__ === Hero.prototype);

