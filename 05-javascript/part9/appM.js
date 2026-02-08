// ES6 Module import file

// default import 
import add from "./mathOperationsM.js"

// named import 
import {subtract, multiply, division} from "./mathOperationsM.js"

console.log(add(4,5))
console.log(subtract(8,5))
console.log(multiply(4,5))
console.log(division(4,2))