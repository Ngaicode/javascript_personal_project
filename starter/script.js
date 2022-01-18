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

console.log(yearsUntilRetirement(1990, "Kevin"));


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
    } else {
        console.log('nobody wins')
    }



}
checkWinner(dolphinAverage1, koalaAverage1, avgdolph2, avgKoala2);

const friend1 = 'kevin';
const friend2 = "mjomba";
const friend3 = "jumwa";


// first javascript array ever by using the literal syntax []
const friends = ['kevin', 'mjomba ', 'jumwa'];
console.log(friends);


// a different way of using arrays
// when you use the array function,you don't need to use the box brackets
const years = new Array(1985, 2000, 1991, 1971, 2005);
console.log(years);


// using arrays
// arrays are zero based,what this means is that they are indexed starting with zero
// when you want to use an array,you write the array name followed by box brackets then insert the index of the data value that you want to use
console.log(friends[0]);
console.log(friends[2]);
console.log(years[2]);


// knowing the exact amount of elements in an array
// we use the  .legnth is a property
console.log(friends.length);
console.log(years.length);


console.log(friends[friends.length - 1]);


// how to change the elements of an array(the logic is a lot like variable re-assignment)
friends[2] = 'Ngai';
console.log(friends);
const firstName = "Ngai";
const aboutMe = [firstName, 'mjomba', 'jumwa', 2022 - 2000, friends];
console.log(aboutMe)


function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const yearOfBirth = [1990, 1967, 2002, 2018];
console.log(calcAge1(yearOfBirth[0]));
console.log(calcAge1(yearOfBirth[2]));
console.log(calcAge1(yearOfBirth[1]));
console.log(calcAge1(yearOfBirth[yearOfBirth.length - 1]));

const ages = [calcAge1(yearOfBirth[0]), calcAge1(yearOfBirth[2]), calcAge1(yearOfBirth[1])];*
console.log(ages)



// methods are basically built in javascript functions that work on an array
// array methods
// methods that add elements to an array
// the push method adds elements to the end of an array
const friends = ['kevin', 'mjomba ', 'jumwa'];
// .push method adds elements to the end of an array
friends.push('Ngai');
const newLegnth = friends.push(360);
console.log(friends, newLegnth);


// the unshift method adds elements at the begining of an array
friends.unshift('Mathew');
console.log(friends);


// methods that remove elements from an array
// pop() method removes the last element of an array
friends.pop();
const removedElement = friends.pop(); //the pop method returns the value of the removed element
console.log(friends);
console.log(removedElement);


// shift()method removes the first element of an array
friends.shift();
console.log(friends);


//indexof() method tells us te index of a particular element in ana array
console.log(friends.indexOf('jumwa'));

// includes() method checks to see wether an element is found in an array,it returns true or false
friends.unshift(23);
console.log(friends.includes('kevin'));
console.log(friends.includes('bob'));
console.log(friends.includes(23));

if (friends.includes('jumwa')) {
    console.log('You have a friend called jumwa');
}

console.log(friends)

const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
    // if (bill >= 50 && bill <= 300) {
    //     const tip = 0.15 * bill;
    //     return tip;
    // } else {
    //     const teep = 0.2 * bill
    //     return teep;
    // }
}
console.log(calcTip(200));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

const kevinArray = [
    'kevin',
    'mjomba',
    2022 - 2000,
    ['Birech', 'Yasmin']
];
kevinArray[1] = 'ngai'
console.log(kevinArray);


// working with objects
// object literal syntax
const kevinObject = {
    firstName: 'kevin',
    secondName: 'mjomba',
    age: 2022 - 2000,
    friends: ['Birech', 'Yasmin'],
    job: 'student',
};

console.log(kevinObject);

// a closer look into objects
const kevinObject = {
    firstName: 'kevin',
    secondName: 'mjomba',
    age: 2022 - 2000,
    friends: ['Birech', 'Yasmin'],
    job: 'student',
};
console.log(kevinObject);
console.log(kevinObject.secondName);
console.log(kevinObject['friends']);

const nameKey = 'Name';
// the bracket notation is useful when we want to compute the property name
// we can put any expression in the square brackets
// when using bracket notation ,the property name has to be a string
console.log(kevinObject['first' + nameKey]);
console.log(kevinObject['second' + nameKey]);


const intrestedIn = prompt('what do you want to know about kevin?Choose between firstname,secondname,age,friends and job');
console.log(intrestedIn);

if (kevinObject[intrestedIn]) {
    console.log(kevinObject[intrestedIn]);
} else {
    console.log('wrong request!Choose between firstname,secondname,age,friends and job');
}

kevinObject.location = 'Nairobi';
kevinObject['twitter'] = '@yulMseeWaJuja';
kevinObject.thirdName = 'jumwa'
console.log(kevinObject)

// challenge
// kevin has two friends,and his best friend is called Rachael
console.log(`${kevinObject.firstName} has ${kevinObject.friends.length} friends,and his best friend is called ${kevinObject.friends[0]}`);

const kevinObject = {
    firstName: 'kevin',
    secondName: 'mjomba',
    birthYear: 2000,
    friends: ['Birech', 'Yasmin','Peace'],
    job: 'student',
    hasDriversLiscence: false,
    getSummarry: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and he has ${this.hasDriversLiscence ? 'a' : 'no'} driver's license`
    },

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

};
console.log(kevinObject.calcAge());
console.log(kevinObject.age)
console.log(kevinObject.getSummarry());*/
// challenge
// 'kevin is a 22 year old student and he has a driver's license'


// separate key value pairs must be separated by commas
const markObject = {
    firstName: 'Mark',
    secondName: 'Miller',
    weightInKgs: 78,
    height: 1.69,
    // an object metod is simply a property whose value happens to be a function expression
    calBMI: function () {
        this.BMI = this.weightInKgs / (this.height * this.height);
        return this.BMI;
    },

};
console.log(markObject.calBMI());
console.log(markObject['BMI']);
console.log(markObject);

const JOhnOBject = {
    firstName: 'John',
    secondName: 'Smith',
    mass: 92,
    height: 1.95,
    // an object metod is simply a property whose value happens to be a function expression
    calBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI
    }


};
console.log(JOhnOBject.calBMI());
console.log(JOhnOBject.BMI);

if (markObject.BMI > JOhnOBject.BMI) {
    console.log(`${markObject.firstName} BMI of ${markObject.BMI} is higher tan JOhn's BMI of ${JOhnOBject.BMI}`);
} else {
    console.log(`${JOhnOBject.firstName} BMI of ${JOhnOBject.BMI} is higher than Mark's BMI of ${markObject.BMI}`)
}
// assigning new values to an array
JOhnOBject.thirdName = 'Wolfsford'
JOhnOBject['childName'] = 'Mary'
console.log(JOhnOBject['thirdName']);
console.log(JOhnOBject['childName']);
console.log(JOhnOBject)









































































































































































































































































































