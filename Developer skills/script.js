// Remember, we're gonna use strict mode in all scripts now!
"use strict";
console.log("meooow");

// prompts the user for input and then stores it into the meow variable
let meow = prompt("whom do you love ?");

// if (meow === "peace") {
//   console.log("I love you silly goose ");
// } else {
//   console.log("You are not her");
// }

switch (meow) {
  case "peace":
    alert("I adore you");
    break;
  case "muthoni":
    alert("I feel so good when I spend time with you");
    break;
  case "amani":
    alert("Thank you for being in my life");
    break;
  default:
    alert("Sorry ,you are not the one");
}
