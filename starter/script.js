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
console.log(age1, age2)


// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

//Both function expressions and arrow functions produce a value that can be stored in a variable
// trying to understand arrow functions
//one liner arrow function
const calcAge3 = birthYear => 2037 - birthYear;//because this is one line of code in the function body,the output will be automatically implicitly returned by javascript
const age3 = calcAge3(1990);//we call/run/invoke an arrow function by writing the variable name it is stored in followed by a parenthesis with the parameters(if any)
console.log(age3);

// arrow function that calculates the number of years till retirement
// 1.Arrow function with multiple parameters and lines of code
// 2.when an arrow function contains multiple parameters,then the parameters have to be put inside parenthesis and be separated by comas
// 3.when an arrow function contains multiple lines of code(requires more logic)in the function body,then it has to be put in curly braces
const yearsUntilRetirement = (birthYear, firstName) => {
    const currentAge = 2037 - birthYear;
    const retirement = 65 - currentAge;
    // returns a template literal
    return `${firstName} retires in ${retirement} years`
}
// calling the function
console.log(yearsUntilRetirement(2000, 'Kevin'))
console.log(yearsUntilRetirement(2004, 'Mjomba'))




// calling a function within another function

function cutFruitPieces(fruit) {
    return fruit * 4;

}


function foodProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangepieces = cutFruitPieces(oranges);
    const juice = `juice with ${applePieces} pieces of  apples and ${orangepieces} pieces of  orange`;
    return juice; //the return keyword specifies the desired output that we want the function to give
}
console.log(foodProcessor(2, 3))

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}




const yearsUntilRetirement = function (birthYear, firstName) {
    const currentAge = calcAge(birthYear);
    const retirement = 65 - currentAge;
    if (retirement > 0) {
        return retirement;
    } else {
        return -1;
    }
}

console.log(yearsUntilRetirement(1990, "Kevin"));*/


// coding challenges
// function that calculates the average score
const calcAverage = (score1, score2, score3) => {
    const avScore = (score1 + score2 + score3) / 3;
    return avScore;
}
const dolphinAverage1 = calcAverage(85, 54, 41);
console.log(dolphinAverage1)
const koalaAverage1 = calcAverage(23, 34, 27);
console.log(koalaAverage1);
const avgdolph2 = calcAverage(44, 23, 71);
console.log(avgdolph2);
const avgKoala2 = calcAverage(65, 54, 49);
console.log(avgKoala2);

// function that checks for the winner
function checkWinner(dolphinAverage1, koalaAverage1, avgdolph2, avgKoala2) {

    if (dolphinAverage1 >= 2 * (koalaAverage1)) {
        console.log(`Dolphins win ${dolphinAverage1} vs  Koalas ${koalaAverage1}`)

    } else if (koalaAverage1 >= 2 * dolphinAverage1) {
        console.log(`Koalas win ${koalaAverage1} vs Dolphins ${dolphinAverage1}`);
    } else if (avgdolph2 >= 2 * avgKoala2) {
        console.log(`Dolphins win ${avgdolph2} vs koalas ${avgKoala2}`)
    } else if (avgKoala2 >= 2 * avgdolph2) {
        console.log(`Koalas win ${avgKoala2} vs Dolphins ${avgdolph2}`)
    }



}
checkWinner(dolphinAverage1, koalaAverage1, avgdolph2, avgKoala2);



























































































































































































































































































































































