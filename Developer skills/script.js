// Remember, we're gonna use strict mode in all scripts now!
"use strict";
console.log("meooow");

// practise with switch statements
const dayarray = ["monday", "tuesday", "wednesday", "thursday", "friday", 203];
dayarray.push("saturday", "sunday");

// for loop that goes through the days of the week
for (let i = 0; i < dayarray.length; i++) {
  let day = dayarray[i];

  // switch statement within a for loop
  switch (day) {
    case "monday": // day === "monday"
      console.log("plan you weekly scedule");
      console.log("go to coding meetup");
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
