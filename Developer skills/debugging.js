"use strict";

// debugging is an important skill to have as a software developer
// MAJOR---any unintended or unexpected behaviour of a programm is called a bug

const measureKelvin = () => {
  const measurement = {
    type: "temp",
    unit: "celsius",
    // FIXING THE BUG
    value: Number(prompt("Degree celsius")),
  };
  console.log(measurement);
  //   console.table() gives us the properties and values of objects in table format
  //FINDING THE BUG,the prompt function always returns a string
  console.table(measurement);
  console.log(typeof measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// IDENTIFYING THE BUG
console.log(measureKelvin());
