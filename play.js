'use strict';

const muthoniPeace = {
    firstName: 'Peace',
    secondName: 'muthoni',
    birthYear: 2001,
    doILOveHer: true,
    getSummary: function () {
        return `${this.firstName} ${muthoniPeace['secondName']} is a ${this.age} year old girl.She is one of the best people that I have in my life and i really appreciate her`
    },
    calcAge: function () {
        return this.age = 2022 - this.birthYear
    },
}
console.log(muthoniPeace.doILOveHer);
console.log(muthoniPeace['calcAge']());
console.log(muthoniPeace['age']);
console.log(muthoniPeace['getSummary']());
console.log(muthoniPeace.birthYear)