//!Inpure function

let a = 10;
const b = 5;

a = 20;
function add(a, b) {
  return a + b;
}

// console.log(add(a, b));

//!Pure function

function pureAdd(a, b) {
  return a + b;
}

// console.log(pureAdd(a, b));

function sum(a) {
  return (b) => {
    if (!b) {
      return a;
    }
    return sum(a + b);
  };
}

// const summa = sum(10)(20)(30);
// console.log(summa());

function recursion(a, b) {
  if (b) {
    return recursion(a, b - 1);
  }
  return a;
}

// console.log(recursion(10, 3));

//!Compose function

const compose = (a, b) => (str) => a(b(str));

const countChars = (str) => {
  const obj = {};

  for (let char of str) {
    obj[char] = obj[char] + 1 || 1;
  }

  return obj;
};

const findMaxChar = (obj) => {
  let max = 0;
  const result = { count: 0, char: "" };

  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      result.count = obj[key];
      result.char = key;
    }
  }
  ``;
  return result;
};

const getMaxChar = compose(findMaxChar, countChars);

console.log(getMaxChar("Jasurbek Otelbayev"));

//!Pipe function

const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((data, fn) => fn(data), x);

const addMeat = (osh) => osh + "Meat";
const addEgg = (osh) => osh + "Egg";

const osh = pipe(addMeat, addEgg);

console.log(osh("OSH"));

//! Referential transparency

const summa = (a, b) => a + b;
const showSum = (a) => "Result is " + a;

console.log(showSum(summa(1, 2)));
console.log(showSum(3));
