// PRINT A MESSAGE
console.log(["Hello from JS", 3]);


// VARIABLES IN JS
const name = "Cheri";
let anAge = 21;
const anArray = ["Hello from JS", 3];
console.log(name, anAge, anArray);

anAge += 1;
console.log(name, anAge);

// name = "Ope"; // CANNOT REASSIGN CONST!
// console.log(name, anAge);

anArray.push("another value");
console.log(name, anAge, anArray);


// STRING MANIPULATION
let myName = "qUiLl";

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
console.log(myName.capitalize); // None in JS!
console.log(myName.length);
console.log(myName[0]);
const name_array = myName.split('');
console.log(name_array);
console.log(name_array.join(''));
console.log(`Hi ${myName}`);
console.log(myName.substring(1,3));


// ARRAYS IN JS
const students = ['Quill', 'Derek', 'Kevin', 'Rhys', 'Ope'];

// CRUD
// CREATE
students.push('Seira');
console.log(students);
// READ
console.log(students[students.length - 1]);
// UPDATE
students[2] = 'Super Kevin 💪';
// DELETE
students.splice(3, 2);
console.log(students);

// () => {} ARROW FUNCTION
students.forEach((student) => {
  console.log(`${student} is amazing!`);
});

// CONTROL THE FLOW IN JS
let age = 21;
if (age === 18) {
  console.log("Finally! You can vote");
}
else if (age < 18) {
  console.log("Not Yet");
}
else {
  console.log("You're old!");
}

// FUNCTIONS IN JS
// () => {}

// const square = (number) => {
//   return number * number;
// };

const square = number => number * number;
console.log(square(4));

const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const remainder = word.substring(1).toLowerCase();
  return `${firstLetter}${remainder}`;
};
console.log(capitalize(myName));