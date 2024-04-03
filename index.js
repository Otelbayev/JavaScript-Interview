// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

// console.log(arr1.concat(arr2));
// console.log(arr1.slice(1, -1))

// arr1.splice(2, 3, "uch", "to'rt", "besh"); //! 2-indexdan keyingi 3 ta elementni o'rniga yozadi

//!filter
// arr1.forEach((item, index, array) => console.log(item, index, array));

//!map

// let arr = arr1.map((item) => item * 2);
// console.log(arr);

//!filter
// arr1.filter((e) => e > 2);

//!reduce

// array.reduce((accumularot, item) => {code}, initilaValue)

// const n = arr1.reduce((acc, item) => {
//   acc += item;
//   return acc;
// }, 100);

// console.log(n);

//!Array berilgan uni ichidagi elementlar nechi arda takrorlanganini Reduce metodi orqal, if/else ishlatmasdan toping.

let arr = [1, 2, 4, 5, 6, 7, 1, 1, 2, 4, 5, 6, 7, 1, 1, 5, 4, 1, 5];

let countMap = arr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});

console.log(countMap);
