

function StudentID(name, lastName, score) {
    this.name = name;
    this.lastName = lastName;
    this.score = score;
}

const student1 = new StudentID("Soso", "Valishvuli", 90);
console.log("Student 1:", student1.name, student1.lastName, "-", "Score:", student1.score);

const student2 = new StudentID("Daniel", "Abramiani", 88);
console.log("Student 2:", student2.name, student2.lastName, "-", "Score:", student2.score);

const student3 = new StudentID("Mate", "Rekhviashvili", 78);
console.log("Student 3:", student3.name, student3.lastName, "-", "Score:", student3.score);

const student4 = new StudentID("Giorgi", "Qimeridze", 85);
console.log("Student 4:", student4.name, student4.lastName, "-", "Score:", student4.score);

const student5 = new StudentID("Luka", "Zazashvili", 90);
console.log("Student 5:", student5.name, student5.lastName, "-", "Score:", student5.score);
