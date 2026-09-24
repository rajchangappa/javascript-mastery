// Create a function called createGreeting that demonstrates a closure.
function createGreeting(name) {
  return function greet() {
    console.log(`Hi ${name}!`);
  };
}

const greetRaj = createGreeting("Raj");
const greetMeliodas = createGreeting("Meliodas");

greetRaj();
greetMeliodas();
