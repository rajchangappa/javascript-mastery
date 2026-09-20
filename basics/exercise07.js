// Create a function called createCounter that creates and returns a counter function.
function createCounter() {
  let count = 0;

  return function () {
    count = count + 1;
    return count;
  };
}

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA());
console.log(counterA());
console.log(counterA());

console.log(counterB());
console.log(counterB());
