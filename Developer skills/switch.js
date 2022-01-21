"use strict";

// using the switch statement

// practise with switch statements
// array with all the days of the week as strings
const dayarray = ["monday", "tuesday", "wednesday", "thursday", "friday", 203];

// using the push method to add two elements to the end of the array
dayarray.push("saturday", "sunday");
// logging to the console to see how many elements the array has
console.log(dayarray.length);

// for loop that goes through the days of the week
for (let i = 0; i < dayarray.length; i++) {
  // dynamically updating the value of the day variable as the for loop goes through the array
  let day = dayarray[i];

  // switch statement within a for loop
  // switch statements come in handy when you are comparing one value  against  multiple times againts  'cases' whose values are alredy known.
  // what is the brackets (the argument)in a switch statement is the condtition/value/expression that must be checked for truthyness against the different cases for the executable code to run.
  // javascript uses strict equality to check for the equality between the cases' respective values/expressions and the argument of the switch statement .IF TRUE,THE CODE RUNS!!!
  // If the value  is equal ===(strict equality) to any of the values in any case,the executable code runs untill it gets to a break.
  switch (day) {
    case "monday": // day === "monday"
      console.log("plan you weekly scedule");
      console.log("go to coding meetup");
      // breaks separate different cases or else the code will keep running without the break
      break;

    case "tuesday": // case checks for strict equality
      console.log("prepare theory videos");
      break;
    case "wednesday":
      console.log("work out");
      break;
    case "thursday":
      console.log("revise what you studied throughout the week");
      break;
    case "friday":
      console.log("take the day off");
      break;

    case 203:
      console.log("this is  a number");
      break;
    case "saturday":
    case "sunday":
      console.log("take a chill pill");
      break;
    //   this is basically like the else statement,if no condition was met,this will then be run
    default:
      console.log("this is not in the array");
  }

  // solving the same problem using an if else statement
  //   if (day === "monday") {
  //     console.log("plan you weekly scedule");
  //     console.log("go to coding meetup");
  //   } else if (day === "tuesday") {
  //     console.log("prepare teory videos");
  //   } else if (day === "wednesday") {
  //     console.log("work out");
  //   } else if (day === "thursday") {
  //     console.log("revise what you studied throughout the week");
  //   } else if (day === "friday") {
  //     console.log("take the day off");
  //   } else if (day === "saturday" || day === "sunday") {
  //     console.log("take a chill pill");
  //   } else {
  //     console.log("this is not in the array");
  //   }
}
