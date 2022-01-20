"use strict";

const muthoniPeace = {
  firstName: "Peace",
  secondName: "muthoni",
  birthYear: 2001,
  doILOveHer: true,
  getSummary: function () {
    return `${this.firstName} ${muthoniPeace["secondName"]} is a ${this.age} year old girl.She is one of the best people that I have in my life and i really appreciate her`;
  },
  calcAge: function () {
    return (this.age = 2022 - this.birthYear);
  },
};
console.log(muthoniPeace.doILOveHer);
console.log(muthoniPeace["calcAge"]());
console.log(muthoniPeace["age"]);
console.log(muthoniPeace["getSummary"]());
console.log(muthoniPeace.birthYear);

const newPeaceArray = new Array("peace", "muthoni", "amani", 23);
newPeaceArray[4] = "i love her";
console.log(newPeaceArray[4]);
newPeaceArray.unshift("Peace");
console.log(newPeaceArray[0]);
console.log(newPeaceArray.length);
console.log(newPeaceArray);

for (let i = 0; i <= newPeaceArray.length - 1; i++) {
  console.log(newPeaceArray[i]);
}
