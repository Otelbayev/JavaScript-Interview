function User(name, age, country) {


  if (!new.target) {
    return new User(name, age, country);
  }



  this.name = name;
  this.age = age;
  if (!country || !country.trim()) {
    this.country = "NONE";
  } else {
    this.country = country;
  }
}

const user1 = User("jasurbek", 19);
const user2 = new User("none", 50, "uz");

console.log(user1);
console.log(user2);
