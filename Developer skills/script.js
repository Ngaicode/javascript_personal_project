// Remember, we're gonna use strict mode in all scripts now!
"use strict";
console.log("meooow");

// practise with switch statements
const dayarray = ["monday", "tuesday", "wednesday", "thursday", "friday"];
for (let i = 0; i < dayarray.length; i++) {
  let day = dayarray[i];

  //   switch statement within a for loop
  switch (day) {
    case "monday": // day === "monday"
      console.log("plan you weekly scedule");
      console.log("go to coding meetup");
      break;

    case "tuesday":
      console.log("prepare teory videos");
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
  }
}
