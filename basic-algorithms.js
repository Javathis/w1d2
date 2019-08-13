const driver = "Harinath";
const navigator = "Andre";

console.log("The driver's name is " + driver);
console.log("The navigator's name is " + navigator);

const driverLen = driver.length;
const navigatorLen = navigator.length;

if (driverLen > navigatorLen) {
  console.log(
    // "The Driver has the longest name, it has " + driverLen + " characters"
    `The Driver has the longest name, it has ${driverLen} characters`
  );
} else if (navigatorLen > driverLen) {
  console.log(
    `The Navigator has the longest name, it has ${navigatorLen} characters`
  );
} else {
  console.log(
    `wow, you both got equally long names, ${driverLen} characters!!`
  );
}

let driverStr = "";

for (let i = 0; i < driverLen; i++) {
  driverStr += driver[i].toUpperCase();
  if (i !== driverLen - 1) {
    driverStr += " ";
  }
}

console.log(driverStr);

let navigatorStr = "";

for (let i = navigatorLen - 1; i >= 0; i -= 1) {
  navigatorStr += navigator[i];
}

console.log(navigatorStr);

if (driver.localeCompare(navigator) > 0) {
  console.log("The driver's name goes first");
} else if (driver.localeCompare(navigator) < 0) {
  console.log("Yo, the navigator goes first definitely");
} else {
  console.log("What?! You both got the same name?");
}
