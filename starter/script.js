'use strict'; //placing this string as the first statement of every script file activates strict mode

/*let hasDriversLiscence = false;
const passDriversTest = true;

if (passDriversTest) hasDriversLiscence = true;
if (hasDriversLiscence) {
    console.log('i can drive :D')
}

// const interface = 'audio';

// alert('How are you my G');
















//function declaration
function logger() {
    console.log('my name is kevin mjomba jumwa');
    console.log('I am learning a lot of exciting stuff');
    console.log('im slowy starting to piece it all together');
    console.log('5');
    console.log(`honestly i'm really exited about sending code to github via SSH `);
    console.log(`honestly at this point i'm just fooling around at this point.Hahaha`);
}
//calling /running /invoking the function
logger();


// function declaration with parameters
function fruitProcessor(apples, oranges) {
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
// invoking the function with arguments
const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(3, 4);
console.log(appleOrangeJuice);

const lotOfFFruit = fruitProcessor(56, 37);
console.log(lotOfFFruit);




// it is the code within the function body(within the curly braces) that will be executed whenever we call this function 
function logger() {
    console.log(`my name is Kevin and I'm repeating this exercise`);
}

// calling/running/invoking the function
logger();
logger();
logger(); // one can call a function as many times as they wish

function foodProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice; //the return keyword specifies the desired output that we want the function to give
}

const appleJuice = foodProcessor(5, 0)
console.log(appleJuice);
console.log(foodProcessor(5, 0));

const appleOrangeJuice = foodProcessor(3, 2);
console.log(appleOrangeJuice);
console.log(foodProcessor(3, 2))

// in javascript,there are different ways of writing functions
// function declaration

function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(2000);
console.log(age1)

// in function expressions,since we use nameless functions,the variable name thn becomes the function name
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2)*/


// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }


// tring to understand arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1990);
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(2000, 'Kevin'))
console.log(yearsUntilRetirement(2004, 'Mjomba'))






















































































