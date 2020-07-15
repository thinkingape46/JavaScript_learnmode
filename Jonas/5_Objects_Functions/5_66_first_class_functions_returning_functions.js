/*
function floorFunc(query) {
    if (query === "bmi") {
        return function bmiFunc(w, h) {
            console.log((w)/(h * h));
        }
    }
    else if (query === "maxHR") {
        return function maxHRFunc(age) {
            console.log(220 - age);
        }
    }
    else {
        console.log("Please query either 'bmi' or 'maxHR'")
    }
}

floorFunc('bmi')(64, 1.72)
floorFunc('maxHR')(29)
floorFunc('hello')



// Immediately Invoked Function Expressions (IIFE)

(function(score) {
    if (score > 100) {
        console.log("Game Complete")
    }
    else {
        console.log('Game Continues')
    }
})(10)
console.log(score)
*/

// Closures

var yearOfBirth = [1945, 2005, 1992]

function calculateAge(yearOfBirth) {
    return 2020 - yearOfBirth;
}

function fullAge(limit, age) {
    return age >= limit;
}


function arrayFunc(array, func) {
    let arrayTemp = []

    for (i=0; i<array.length; i++) {
        arrayTemp.push(func(array[i]))
    }
    return arrayTemp
}

var ages = arrayFunc(yearOfBirth, calculateAge)

var japanFullAge = arrayFunc(ages, fullAge.bind(this, 22))
console.log(ages)
console.log(japanFullAge)