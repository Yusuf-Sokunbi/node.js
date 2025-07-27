const firstModule = require('./first-module');
// import { add,divide } from "./first-module.js";

console.log(firstModule.add(10, 2)); // Outputs: 5

try {
  console.log('trying to divide by zero'); 
  let result = firstModule.divide(109,10)
  console.log(result, 'result');// This will throw an error
} catch (error) {
    console.error('Caught an Error:', error.message); // Outputs: Error: Divide by zero is not allowed
}