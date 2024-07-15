//!Constructor function
function User(name, age) {
  this.name = name;
  this.age = age;

  this.getFullName = () => {
    return this.name + " " + this.age;
  };
}

const func1 = new User("John", 20);
const func2 = new User("John", 20);

// console.log(func1.getFullName());
// console.log(func2);

//!Class
class User1 {
  name = "";
  age = "";
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getFullName() {
    return this.name + " " + this.age;
  }
}

const obj1 = new User1("John", 20);
const obj2 = new User1("John", 20);

// console.log(obj1.getFullName());
// console.log(obj2);

//!getter/setter

class User2 {
  _money = 0;
  constructor(money) {
    this._money = money;
  }

  get money() {
    return this._money + 5;
  }

  set money(value) {
    if (value > 100) {
      this._money = value;
    } else {
      return this._money;
    }
  }
}

const user = new User2(500);

// user.money = 100;

// console.log(user.money);

//!Inheritance

class Person {
  name = "";
  lname = "";
  _money = 0;

  constructor(name, lname, money) {
    this.name = name;
    this.lname = lname;
    this._money = money;
  }

  getFullName() {
    return `${this.name} ${this.lname}`;
  }

  get money() {
    return this._money;
  }

  spend(money) {
    this._money -= money;
  }
}

class Employee extends Person {
  salary = 0;
  constructor(name, lname, money, salary) {
    super(name, lname, money);
    this.salary = salary || 0;
    this.earn();
  }

  earn() {
    this._money += this.salary;
  }
}

const emp = new Employee("Jasurbek", "Otelbayev", 50, 400);

//!How to do?

let a = 10;
let b = 20;

console.log(a + b);

//!What to do?

function multiply(a, b) {
  return a * b;
}

console.log(multiply(a, b));

function MyFunction(name, age) {
  this.name = name;
  this.age = age;
}

MyFunction.prototype.getFullName = function () {
  return this.name + " " + this.age;
};

const func = new MyFunction("Jasurbek", 20);
const f = new MyFunction("None", 20);

class MyClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //   getFullName() {
  //     return this.name + " " + this.age;
  //   }
}

const obj = new MyClass("Jasurbek", 20);
const o = new MyClass("None", 20);

obj.__proto__.getFullName = function () {
  return this.name + " " + this.age;
};

// console.log(func);
console.log(obj);
