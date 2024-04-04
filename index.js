const obj = {
  name: "none",
  age: 19,
};

// for (const iterator of obj) { //!error
//   console.log(iterator);
// }

const obj1 = {
  name: "none",
  age: 20,
  [Symbol.iterator]: function () {
    let index = 0;
    let values = Object.values(this);
    return {
      next() {
        if (index < values.length) {
          let value = values[index];
          index++;
          return { done: false, value };
        } else {
          return { done: true, value: values[index] };
        }
      },
    };
  },
};

// for (const iterator of obj1) {
//   console.log(iterator);
// }

const obj2 = {
  [Symbol.toPrimitive]: function (hint) {
    if (hint === "string") {
      return "This object is String.";
    }
  },
};

alert(obj2);

//!hint -> number, string, default
