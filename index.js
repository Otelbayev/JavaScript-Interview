const obj = { name: "Jasurbek", age: 19, job: "developer" };

const descriptor = Object.getOwnPropertyDescriptor(obj, "name");

// console.log(descriptor);

Object.defineProperty(obj, "name", { writable: false });

obj.name = "none";

// console.log(obj); //!{ name: 'Jasurbek', age: 19, job: 'developer' }

Object.defineProperties(obj, {
  name: { writable: true },
  age: { configurable: false },
  job: { enumerable: false },
});

obj.name = "none";
delete age;
// console.log(obj); //!{ name: 'none', age: 19, job: 'developer' }

for (let key in obj) console.log(`${key}: ${obj[key]}`);
//name: none
// age: 19

const obj1 = {
  name: "name",
  surname: "surname",
  getFullName() {
    return this.name + " " + this.surname;
  },
};

for (let key in obj1) {
  //   console.log(key, obj1[key]);
}

Object.defineProperty(obj1, "getFullName", { enumerable: false });

for (let key in obj1) {
  //   console.log(key, obj1[key]);
}
Object.defineProperty(obj1, "getFullName", { enumerable: true });

for (let key in obj1) {
  //   console.log(key, obj1[key]);
}

const obj2 = { name: "none" };

Object.defineProperty(obj2, "name", { writable: false });
obj2.name = "jasurbek";
console.log(obj2);

Object.defineProperty(obj2, "name", { writable: true });
obj2.name = "jasurbek";
console.log(obj2);
