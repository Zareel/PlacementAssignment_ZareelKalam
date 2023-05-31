const classRoom = () => {
  let students = [];

  let getSudents = () => {
    console.log(students);
  };

  let joinClass = (student) => {
    console.log(`${student} joined`);
    students.push(student);
  };

  let leaveClass = (student) => {
    console.log(`${student} left`);
    students = students.filter((el) => el !== student);
  };
  return {
    getSudents,
    joinClass,
    leaveClass,
  };
};

const result = classRoom();
console.log(result);
result.getSudents();
result.joinClass("Roshan");
result.joinClass("Zalia");
result.getSudents();
result.leaveClass("Roshan");
result.getSudents();
