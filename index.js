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
