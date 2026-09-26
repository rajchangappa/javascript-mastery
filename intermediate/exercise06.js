// Create an object representing a developer.
const developer = {
  name: "Raj",
  language: "Javascript",
  introduce: function () {
    console.log(`${this.name} writes ${this.language}`);
  },
  intoduceWithArrow: () => {
    console.log(`${this.name} writes ${this.language}`);
  },
};

developer.introduce();
developer.intoduceWithArrow();
