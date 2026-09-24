// Write a JavaScript program that uses an IIFE to create a private variable.
(() => {
  let message = "This is private!";
  console.log(message);
})();

// console.log(message); Not defined
