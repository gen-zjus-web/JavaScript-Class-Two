// Const is a variable. We can't reassign it and redeclaire it.
//Let is also a variable. We can't redeclaire it. But We can reassign it.

//Use of const 
const temperatureOne = Number(prompt("Convert Celsius to Fahrenheit"));
const resultOne = (temperatureOne * 9/5) + 32;
console.log(resultOne);

//Use of let  
let temperatureTwo = Number(prompt("Convert Fahrenheit to Celsius")); 
const resultTwo = (temperatureTwo - 32) * 5/9 ;
console.log(resultTwo);