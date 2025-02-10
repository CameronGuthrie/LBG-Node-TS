// console.log("Hello World! Running Node.js with TypeScript!");

// import { add, subtract } from "./maths.js";

import { Calculator } from "./maths.js";

const calc = new Calculator();

console.log(calc.add(5,3)); // output 8

console.log(calc.subtract(10,4)); // output 6