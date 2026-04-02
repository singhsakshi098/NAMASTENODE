require("./xyz.js");
//importing the x and calculate sum from sum.js file

const {x,calculateSum} = require("./calculate/sum.js");
const {calculateMultiply} = require("./calculate/multiply.js");

var name = "Namatse js";

var a = 10;
var b = 7;

calculateSum(a,b);
calculateMultiply(a,b);

console.log(x);
