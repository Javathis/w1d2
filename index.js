/*
// function declaration
function greetIouri() {
  console.log("Hello Iouri!");
}

// function call
// greetIouri();

function greetMarco() {
  console.log("Hello Marco!");
}

// greetMarco();

function greet(name) {
  return "Hello " + name + "!";
  console.log("Hello " + name + "!"); // unreachable
}

greet("Marko");
greet("Blenda");
greet("Ali");

const message = greet("Anna");
console.log(message);

// Create a function that returns whether a student's name has an odd or even number of letters
// return a string '<Name> has an even/odd number of letters'

function oddOrEven(name) {
  if (name.length % 2 === 0) {
    return name + " has an even number of letters";
  }
  return name + " has an odd number of letters";
}

// const sagaOddOrEven = oddOrEven("Saga");
oddOrEven("Saga");
console.log(oddOrEven("Alfonso"));

function add(a, b) {
  return a + b;
}

add(4, 5);
const sum = add(4, 5);
console.log("sum is: ", sum);
console.log(add(4, 5));

// Create a function operation(a, sign, b) that will return the result of the mathematic operations of a operator b
// signs: +, -, *, /, %, **

function operation(a, operator, b) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else if (operator === "%") {
    return a % b;
  } else if (operator === "**") {
    return a ** b;
  }
  return "The operator is not valid.";
}

function operation(a, operator, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    case "**":
      return a ** b;
    default:
      return "The operator is not valid.";
  }
}

console.log(operation(6, "*", 7)); // 42
console.log(operation(6, "1231", 7)); // 42

// console.log(name); ❌
// const name = "John Doe";

multiply(1, 2);
// function declaration
function multiply(a, b) {
  return a * b;
}

// console.log(double(42)); ❌

// function expression
const double = function(n) {
  return n * 2;
};

console.log(double(42));

// arrow functions

const triple = n => {
  return n * 3;
};

const quadruple = n => n * 4;

console.log(quadruple(4));

const divide = (a, b) => a / b;

const quotient = divide(9, 3);
console.log(quotient);

*/

const bootcamps = ["UX/UI", "WebDev"];
const cities = ["Berlin", "Amsterdam", "Paris", "Madrid", "Barcelona"];
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const falsy = [null, false, undefined, "", 0, NaN];
const arrayOfArrays = [bootcamps, cities, digits, falsy, []];

const emptyArray = [];
emptyArray.push("random value");
console.log(emptyArray);

// let studentsCountries = [];
const studentsCountries = ["Portugal", "Bengladesh", "Germany"];
console.log(studentsCountries[0]);
console.log(studentsCountries[studentsCountries.length - 1]);

studentsCountries[0] = "India";

// add an element to the end of the array
studentsCountries.push("Sweden");
studentsCountries.push("Russia", "France");

// add an element in the beginning of the array
studentsCountries.unshift("Ukraine");
studentsCountries.unshift();

// inserts an element at a specified index
studentsCountries.splice(1, 1, "England"); // removes element at index 1 and adds "England" at that index
studentsCountries.splice(2, 0, "India");

// remove element at specified index
studentsCountries.splice(4, 2); // deletes 2 elements starting from index 4

// remove first element
studentsCountries.shift();

// remove last element
studentsCountries.pop();

console.log(studentsCountries);

// iterate over array

for (let i = 0; i < studentsCountries.length; i += 1) {
  console.log(studentsCountries[i]);
}

// forEach is an array method, that takes as a parameter a callback function that will be called on every iteration, with the current element as the first parameter
studentsCountries.forEach(function(country, i) {
  console.log(country + " is at index " + i);
});

function printCountry(country, i) {
  console.log(country + " is at index " + i);
}
studentsCountries.forEach(printCountry);

/*
for (const country of studentsCountries) {
  console.log(country.toUpperCase());
}
*/
/*
studentsCountries.forEach(country => {
  console.log(country);
});
*/

[null, undefined, 0, "", NaN].forEach(function(el) {
  console.log(el);
});
