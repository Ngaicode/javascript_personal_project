"use strict";

// debugging is an important skill to have as a software developer
// MAJOR---any unintended or unexpected behaviour of a programm is called a bug

// const measureKelvin = () => {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     // FIXING THE BUG
//     // value: Number(prompt("Degree celsius")),
//     value: 10,
//   };
//   console.log(measurement);
//   //   console.table() gives us the properties and values of objects in table format
//   //FINDING THE BUG,the prompt function always returns a string
//   console.table(measurement);
//   console.log(typeof measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // IDENTIFYING THE BUG
// console.log(measureKelvin());

// // debugging using the debugger in google chrome
// const calcTempAmplitudeBug = function (_t1, _t2) {
//   // the concat method joins the two arrays into one
//   const temps = _t1.concat(_t2);
//   console.log(temps);

//   // this statement assumes that the first element of the selected aray is the maximum temprature
//   let max = 0;
//   // this statement assumes that the first element in the array is the minimum temperature
//   let min = 0;
//   // for loop going through the elements of the selected array to check for the maximum and minimum temperature
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     // this statement skips over elements in the array that are not numbers
//     if (typeof currentTemp !== "number") continue;
//     // if the current temp is greater than the max,then that should become the max
//     if (currentTemp > max) max = currentTemp;
//     // if the current temp is less than the min ,then that should become the min
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max);
//   console.log(min);
//   return max - min;
// };
// const amplitudeBug = calcTempAmplitudeBug(
//   [11, 2, "meow", 3],
//   [10, 1, 12, 15, 9, 17]
// );
// console.log(amplitudeBug);

// CODING CHALLENGE

// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1
// days ... 21oC in 2 days ... 23oC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    // similar to  string +=  `...${arr[i]}°C in ${i + 1} days `;
    string = string + `...${arr[i]}°C in ${i + 1} days `;
  }
  console.log(string);
};
const string = printForecast(data1);
console.log(string);
