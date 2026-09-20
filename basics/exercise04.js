// Create a JavaScript function using an arrow function that calculates the total price of items in a shopping cart.
const prices = [100, 250, 50, 300];

let total = 0;
const calculateTotal = (items) => {
  items.forEach((item) => {
    return (total += item);
  });
  console.log(total);
};

calculateTotal(prices);
