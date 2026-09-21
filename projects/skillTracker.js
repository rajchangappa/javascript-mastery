const skills = [
  { name: "JavaScript", sessions: [60, 45, 90] },
  { name: "React", sessions: [50, 40] },
];

const calculateTotal = (sessions) => {
  let total = 0;
  sessions.forEach((session) => {
    total += session;
  });
  return total;
};

console.log(calculateTotal([60, 45, 90]));

const addNewSkills = (skills, name, ...session) => {
  const newSessions = { name, session: [...session] };

  const newSkills = [...skills, newSessions];
  return newSkills;
};

console.log(addNewSkills(skills, "Node JS", 30, 45, 60));

function createTracker() {
  let duration = 0;

  return function (session) {
    duration += session;
    return duration;
  };
}

const javascriptTracker = createTracker();

console.log(javascriptTracker(60)); // 60
console.log(javascriptTracker(45)); // 105
console.log(javascriptTracker(30)); // 135
