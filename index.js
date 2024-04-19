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

const summa = sum(10)(20)(30);
console.log(summa());

function recursion(a, b) {
  if (b) {
    return recursion(a, b - 1);
  }
  return a;
}

console.log(recursion(10, 3));
