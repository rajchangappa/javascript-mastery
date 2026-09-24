// Create a JavaScript object representing a user.
const user = {
  name: "Jacob",
  greet: function () {
    console.log(this.name);
  },
};

const secondUser = {
  name: "Chris",
  greet: function () {
    console.log(this.name);
  },
};

user.greet();
secondUser.greet();
