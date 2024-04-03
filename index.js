const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [first, second, thrid, , fifth, ...{ push }] = array;

// console.log(first);
// console.log(second);
// console.log(thrid);
// console.log(fifth);
// console.log(rest);

// console.log(push("none"));

const obj = {
  name: "Jasurbek",
  surname: "Otelbayev",
  age: 19,
  b: 100,
};

const { name: none, age, surname, ...rest } = obj;

console.log(none);
console.log(age);
console.log(surname);
console.log(rest);

const a = "b";

const { [a]: b } = obj;

console.log(b);

let x = 1;
let y = 2;

console.log(x, y);

[x, y] = [y, x];

console.log(x, y);
