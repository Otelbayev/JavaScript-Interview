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

let array = [1, 2, 3, 4, 6, 1, 4, 4, 4, 5, 1, "a", "b", "c", "a", "b"];
const result = array.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log(result);
// acc = {} - item = 1
// acc = {'1':1} - item = 2
// acc = {'1':1, '2':1} - item = 3
// acc = {'1':1, '2':1, '3':1} - item = 4
// acc = {'1':1, '2':1, '3':1, '4':1} - item = 6
// acc = {'1':1, '2':1, '3':1, '4':1, '6':1} - item = 1
// acc = {'1':2, '2':1, '3':1, '4':1, '6':1} - item = 4
// acc = {'1':2, '2':1, '3':1, '4':2, '6':1} - item = 4
// acc = {'1':2, '2':1, '3':1, '4':3, '6':1} - item = 4
// acc = {'1':2, '2':1, '3':1, '4':3, '6':1, '5':1 } - item = 5
// acc = {'1':3, '2':1, '3':1, '4':3, '6':1, '5':1 } - item = 1
// acc = {'1':3, '2':1, '3':1, '4':3, '6':1, '5':1 , 'a':1} - item = a
// acc = {'1':3, '2':1, '3':1, '4':3, '6':1, '5':1, 'a':1, 'b':1} - item = b
// acc = {'1':3, '2':1, '3':1, '4':3, '6':1, '5':1, 'a':1, 'b':1, 'c':1} - item = c
// acc = {'1':3, '2':1, '3':1, '4':3, '6':1, '5':1, 'a':2, 'b':1, 'c':1} - item = a
// acc = {'1':3, '2':1, '3':1, '4':3, '6':1, '5':1, 'a':2, 'b':2, 'c':1} - item = b
