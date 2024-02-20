// business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}


// user interface logic 
let operation = prompt("What would you like to do? \n options \n add \n subtract \n divide \n multiply");
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
if (operation === "add") {
  console.log("add")
  window.alert(add(number1, number2))
}
else if (operation === "subtract") {
  console.log("subtract")
  window.alert(subtract(number1, number2))
}
else if (operation === "multiply") {
  window.alert(multiply(number1, number2))
}
else if (operation === "divide") {
  window.alert(divide(number1, number2))
}