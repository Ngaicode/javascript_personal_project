// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// console.log("meooow");

// // prompts the user for input and then stores it into the meow variable
// let meow = prompt("whom do you love ?");

// // if (meow === "peace") {
// //   console.log("I love you silly goose ");
// // } else {
// //   console.log("You are not her");
// // }

// switch (meow) {
//   case "peace":
//     alert("I adore you");
//     break;
//   case "muthoni":
//     alert("I feel so good when I spend time with you");
//     break;
//   case "amani":
//     alert("Thank you for being in my life");
//     break;
//   default:
//     alert("Sorry ,you are not the one");
// }

// console.log("KEEP GOING ,KEEP CODING ,KEEP BUILDING!!!");

console.log(
  "DEvelop a genuine curiosity and passion for understanding of how things actually work"
);

// PROBLEM 1
// we work for a company building a smart home thermometer.Our most recent task is this:Given  an array of temperatures of one day,calculate the temperature amplitude.Keep in mind that sometimes there might be a sensor error

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

//1) understanding the problem
// -what is temp amplitude:Ans -difference between the highest and lowest temp within a a day
// -how to compute the max and minimum temp?
// -what does a sensor error look like?and what to do when one occurs
//

// 2)breaking the big problem into sub-problems
// -How to inore errors
// -How to find max temperature in array?
// -how to find the minimum value in an array?
// -subtract minimum from maximum

// SOLVING THE PROBLEM
const calcTempAmplitude = function (temps) {
  // this statement assumes that the first element of the selected aray is the maximum temprature
  let max = temps[0];
  // this statement assumes that the first element in the array is the minimum temperature
  let min = temps[0];
  // for loop going through the elements of the selected array to check for the maximum and minimum temperature
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    // this statement skips over elements in the array that are not numbers
    if (typeof currentTemp !== "number") continue;
    // if the current temp is greater than the max,then that should become the max
    if (currentTemp > max) max = currentTemp;
    // if the current temp is less than the min ,then that should become the min
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max);
  console.log(min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);

// PROBLEM 2
// the function should now receive two arrays

// 1)understanding the problem
// -Should we implement the same functionality twice?No,we should just merge the two arrays in the begining

// 2)breaking the problem into sub problems
// -how to merge two arrays

// SOLVING THE PROBLEM
// function declaration
const calcTempAmplitudenew = function (_t1, _t2) {
  // the concat method joins the two arrays into one
  const temps = _t1.concat(_t2);
  console.log(temps);

  // this statement assumes that the first element of the selected aray is the maximum temprature ,it  later gets re-assigned in the forloop 
  let max = temps[0];
  // this statement assumes that the first element in the array is the minimum temperature it ,later gets re-assigned in the forloop
  let min = temps[0];
  // for loop going through the elements of the selected array to check for the maximum and minimum temperature
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    // this statement skips over elements in the array that are not numbers
    if (typeof currentTemp !== "number") continue;
    // if the current temp is greater than the max,then that should become the max
    if (currentTemp > max) max = currentTemp;
    // if the current temp is less than the min ,then that should become the min
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max);
  console.log(min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudenew(temperature, [10, 31, 11]);
console.log(amplitudeNew);
