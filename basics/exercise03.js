// Write a JavaScript program that checks a person's age and determines their age category.
// Your program must print exactly one of these messages based on the value of age:
// "Child" → age is below 13
// "Teenager" → age is 13–19
// "Adult" → age is 20–59
// "Senior" → age is 60 or above

function checkAge(age) {
  if (age < 13) {
    console.log("Child");
  } else if (age >= 13 && age <= 19) {
    console.log("Teenager");
  } else if (age >= 20 && age < 60) {
    console.log("Adult");
  } else {
    console.log("Senior");
  }
}

checkAge(22);
checkAge(52);
checkAge(2);
checkAge(92);
