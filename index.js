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
