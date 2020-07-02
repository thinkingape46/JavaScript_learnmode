/*
Basic operators
*/
// a = 10
// b = 34
// c = "10"
// d = 10

// Math operators

// console.log(a + b)
// console.log(a - b)
// console.log( a * b)
// console.log(a / b)

// Logical operators.

// console.log("Local Operators")
// console.log(a > b)
// console.log(a < b)
// console.log(a == c)
// console.log(a === c)
// console.log(a == d)
// console.log(a === d)

// // Type operators
// console.log("Type operators")

// var typeOfA = typeof(a)
// var typeOfC = typeof(c)
// console.log(typeOfA)
// console.log(typeOfC)

// // Operator preceedence.

// var dOB = 2005;
// var currentYear = 2020;
// var ageLimit = 18

// var isAdult = currentYear - dOB >= ageLimit;
// console.log(isAdult)

// BMI calculation

let weightBMI = document.getElementById("weightBMI")
let heightBMI = document.getElementById("heightBMI")
let bmiForm = document.getElementById("calculateBMI")
let insertBMI = document.getElementById("bmiResult")
let bmiCat = document.getElementById("bmiCat")

bmiForm.addEventListener("submit", (e) => {
    e.preventDefault()
    insertBMI.textContent = ""
    bmiCat.textContent = ""
    weightBMI.focus()
    calculateBMI()
})

function calculateBMI() {
    let bmi = (weightBMI.value) / (heightBMI.value/100 * heightBMI.value/100)

    weightBMI.value = ""
    heightBMI.value = ""

    insertBMI.insertAdjacentHTML("beforeEnd", `Your BMI: <strong>${bmi}</strong>`)    

    if (bmi >= 30) {
        bmiCat.insertAdjacentHTML("beforeEnd", "You are in Obsese Category.")
        bmiCat.style.color = "#d90000"
    }
    else if (bmi >= 25 && bmi < 30) {
        bmiCat.insertAdjacentHTML("beforeEnd", "You are in Overweight category.")
        bmiCat.style.color = "#d16500"
    }
    else if (bmi > 18.5 && bmi < 25) {
        bmiCat.insertAdjacentHTML("beforeEnd", "You have a Healthy Weight.")
        bmiCat.style.color = "#005217"
    }
    else if (bmi < 18.5) {
        bmiCat.insertAdjacentHTML("beforeEnd", "You are Underweight.")
        bmiCat.style.color = "#a32600"
    }

}




