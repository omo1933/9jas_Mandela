//Variable for forecast
const kelvin=0;
//Variable for celsius
const celsius=kelvin - 273;
//Variable for Fahrenheit
const fahrenheit=celsius*(9/5)+32;
//convert to whole number
Math.floor(fahrenheit);
//log information to console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit` );
//convert celsius to the newton scale
const newton=celsius*(33/100);
//convert to whole number
Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`)