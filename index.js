const obj = {
    name: "name",
    //   toString: () => {
    //     return "toString";
    //   },
  };
  
  // console.log(obj);
  // console.log(obj.toString());
  
  // const array = [];
  
  // console.log(array);
  
  // __proto__
  
  const arr1 = [1];
  const arr2 = [2];
  
  //this bu yerda arrayni qaytaradi.
  
  //!array
  // arr1.__proto__.getLength = function () {
  //   console.log("Getting length from prototype", this.length);
  // };
  
  // arr1.getLength();
  // arr2.getLength();
  
  //!string
  // "string".__proto__.getLength = function () {
  //   console.log(this.length);
  // };
  
  // "jasurbek".getLength();
  // "ja".getLength();
  
  function CreateUser(name, age) {
    this.name = name;
    this.age = age;
  }
  
  CreateUser.prototype.getBirth = function () {
    return new Date().getFullYear() - this.age;
  };
  
  const user1 = new CreateUser("jasurbek", 20);
  
  console.log(user1.getBirth());
  
  //!prototype chaining
  //Object => Object.prototype => null
  // {}.__proto__ = Object.prototype
  //Array => Array.prototype => Object.prototype => null
  // [].__proto__ === Array.prototype;
  //String => String.prototype => Object.prototype => null
  // "string".__proto__ = String.prototype;