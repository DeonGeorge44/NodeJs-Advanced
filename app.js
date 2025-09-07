//Mthd 1: Common Js MEthod to import or return a variable or a function to another
// const {calculateSum,foreignValue} = require('./calculate/sum');
// const {calculateMultiply} = require('./calculate/multiply');


const {calculateSum,calculateMultiply} = require('./calculate');

const util = require('node:util');
const data = require('./data.json');
console.log(JSON.stringify(data));

//Mthd 2 : ES Module Method to export a variable or a function
// import { calculateSum,foreignValue } from "./calculate/sum.js";
// import { calculateMultiply } from "./calculate/multiply.js";


var name = 'Namaste NodeJS';

var a= 10;
var b = 20;

// console.log(name);
// console.log(a+b);

// console.log(global);
calculateMultiply(100,300)
calculateSum(10,20);


// console.log(this);
console.log('APP FILE');