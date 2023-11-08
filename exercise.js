class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `"Hi, my name is ${this.name} and I am ${this.age} years old."`;
  }
}

const person = new Person("Divya", "25");
person.introduce();
console.log(person.introduce());
/********************************************** */
const person1 = new Person("John", 25);
function describePerson(callback) {
  return callback(person1);
}

function customCallback() {
  console.log(person1.introduce());
}

describePerson(customCallback);
/********************************************** */
function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

wait(7000).then(() => console.log("finished"));
/********************************************** */
console.log(person1.introduce());
describePerson(
  function () {
    console.log(this.introduce());
  }.bind(person1)
);
