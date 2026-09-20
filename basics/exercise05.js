// Write a JavaScript program that combines two arrays and then creates a function that can accept any number of values.
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];

const fullStack = [...frontend, ...backend];

const printSkills = (...skills) => {
  for (i = 0; i < skills.length; i++) {
    console.log(skills[i]);
  }
};

printSkills(...fullStack);
