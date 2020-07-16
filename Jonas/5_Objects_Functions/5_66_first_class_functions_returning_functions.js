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



// Simple quiz
var quizQuestion = function(question, choice, answer) {
    this.question = question;
    this.choice = choice;
    this.answer = answer;
}

// var quiz = function() {
//     var randNum = Math.floor(Math.random() * 2 + 1);
//     var questions = ['placeholder', questionOne, questionTwo];
//     console.log(questions[randNum].question);
//     console.log(`0. ${questions[randNum].choice[0]}`);
//     console.log(`1. ${questions[randNum].choice[1]}`);
//     console.log(`2. ${questions[randNum].choice[2]}`);

//     var answer = prompt("Choose your answer: ");

//     if (questions[randNum].choice[answer] === questions[randNum].answer) {
//         console.log("Right answer!");
//     }
//     else {
//         console.log("Wrong answer!")
//     }
// }

var questionOne = new quizQuestion(
    "Is JavaScript a cool programming language?",
    ['yes', 'no', 'not sure'],
    "yes");

var questionTwo = new quizQuestion(
    "Who is your JavaScript teacher?",
    ["Matthew", "Jonas", "Clark"],
    "Jonas"
);

game = 'on';

(function() {

    while (game === 'on') {
    var randNum = Math.floor(Math.random() * 2 + 1);
    var questions = ['placeholder', questionOne, questionTwo];
    console.log(questions[randNum].question);
    console.log(`0. ${questions[randNum].choice[0]}`);
    console.log(`1. ${questions[randNum].choice[1]}`);
    console.log(`2. ${questions[randNum].choice[2]}`);

    var answer = prompt("Choose your answer: \nenter 'q' to quit. ");

    if (questions[randNum].choice[answer] === questions[randNum].answer) {
        console.log("Right answer!");
    }
    else if (answer === 'q') {
        console.log('Quiz Ended!')
        game = 'off';
    }
    else {
        console.log("Wrong answer!")
    }}
})();

*/