// Write a JavaScript program that demonstrates the difference between a variable declared inside a function and a variable declared outside it.

const globalScope = "I am global!";

function showMessages() {
  let localMessage = "I am local!";
  console.log(localMessage);
  console.log(globalScope);
}

showMessages();

console.log(globalScope);
