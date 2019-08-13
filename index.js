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

// Create a function operation(a, sign, b) that will return the result of the mathematic operations of a operator b
// signs: +, -, *, /, %, **
