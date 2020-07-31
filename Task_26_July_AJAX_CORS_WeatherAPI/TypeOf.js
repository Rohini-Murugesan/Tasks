// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
console.log(typeof(1), //Number
typeof(1.1), // Number
typeof("1.1"), //String
typeof(true), //Boolean
typeof(null), //null is an object 
typeof(undefined), // undefined
typeof([]), // object
typeof({})) //object
});