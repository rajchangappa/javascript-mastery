const user = {
  name: "Raj",
  age: 25,
  city: "Bengaluru",
  skills: ["JavaScript", "React", "Node.js"],
};

// Uses object destructuring to extract name, age, and city.
// Uses array destructuring to extract the first and third skills from skills.
// Store those extracted values in appropriately named variables.
const { name, age, city, skills } = user;
const [firstSkill, , thirdSkill] = skills;

const newUser = `
    Name: ${name}
    Age: ${age}
    City: ${city}
    First Skill: ${firstSkill}
    Third Skill: ${thirdSkill}
    `;

console.log(newUser);
