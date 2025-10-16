// module import

// default import
import mul from "./mathOperations.js";

console.log(mul(10, 20))

// named import
import { add, sub } from "./mathOperations.js";

console.log(add(10, 20))
console.log(sub(10, 20))

