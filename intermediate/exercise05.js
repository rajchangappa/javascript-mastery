// Create two constructor functions: Person and Developer.
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

function Developer(name, language) {
  Person.call(this, name);
  this.language = language;
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.code = function () {
  console.log(`I write ${this.language}`);
};

const developer = new Developer("Raj", "JavaScript");

developer.greet();
developer.code();
