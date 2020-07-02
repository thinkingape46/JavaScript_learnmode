// ################# DAY 7 ################### //

// map function in JavaScript

// let pets = [
//     {name: "Tracy", species: "cat"},
//     {name: "Camper", species: "dog"}
//   ]
//   pets.push({name: "Brits", species: "dog"})
  
//   function extractName(x) {
//     return x.name
//   }
  
//   let hello = pets.map(extractName)
//   console.log(hello)

//   filter function in JavaScript

// let pets = [
//     {name: "Tracy", species: "cat", age: 1},
//     {name: "Camper", species: "dog", age: 2},
//     {name: "Brits", species: "dog", age: 5}
//   ]

// let onlyDogs = pets.filter(filterDogs)
// // filter(filterDogs) returns an array of dogs, since this is an array and filter function is still available.
// // We add another filter function i.e. filterBabies.
// // Chain of filter and map methods.
// let onlyBabies = pets.filter(filterDogs).filter(filterBabies).map(onlyNames)

// function filterDogs(x) {
//     return x.species == "dog"
// }

// function filterBabies(x) {
//     return x.age < 5
// }

// function onlyNames(x) {
//     return x.name
// }

// console.log(onlyDogs)
// console.log(onlyBabies)
console.log("                                                            ")
console.log("                                                            ")
console.log("--------------DAY 8 - VARIABLE SCOPE AND CONTEXT--------------")

// let myName = "Brad"
console.log("                                                            ")
console.log("                                                            ")
console.log("------------------------VARIABLE SCOPE------------------------")

// function sayName() {
//     let myName = "Jack"
//     console.log(myName)    
// }

// sayName()
// console.log(myName)

// function hello() {
//     let myName = "Jack"
//     return myName
// }

// // console.log(myName)
// console.log(hello())
// console.log(myName)

// Changing the global variable

// console.log("Global Scope", myName)

// function hello() {
//     myName = "Jack"
// }

// hello()
// console.log("Global Scope", myName)

// VAR and LET variables.
// LET - block scope
// VAR - function scope

// function hello() {
//     // let myName = "function level block"
//     if  (1 == 1) {
//         var myName = "if level block"
//         console.log(myName)
//     }
//     console.log(myName)
// }

// hello()
// console.log(myName)

console.log("                                                            ")
console.log("                                                            ")
console.log("-----------------------VARIABLE CONTEXT-----------------------")

let name = {
    firstName: "John",
    lastName: "Doe",
    drive() {
        function someRandom() {
            console.log(this)
        }
        someRandom()
        console.log(this.firstName + " " + this.lastName + " is driving.")
    }
}

console.log(name.drive())

console.log("the 'this' keyword points towards the object that is executing the function")
console.log(this)

function breathe(x) {
    console.log(this.firstName + " " + this.lastName + " inhaled and exhaled.")
}

console.log("-------Below line use 'call' method-------------")

breathe.call(name)

console.log("\n")
console.log("\n")
console.log("-------------------DAY 9 - Misc MUST KNOW-------------------")

console.log("\n")
console.log("9.1 Anonymous Functions")
console.log("\n")

console.log("Anonymous are usually the functions without a name.\nA function we will on need once.\nSince it has no name, it cannot be called or referenced later.")

// document.addEventListener("click", function() {
//     console.log("single click on document logged")})

console.log("\n")
console.log("9.2 Arrow Functions")
console.log("\n")
console.log("Arrow function have a cleaner and minimalistic syntax")

// document.addEventListener("dblclick", () => {
//     console.log("double click on document logged")})
console.log("\nIf the body of an arrow function is entirely in a single line, we don't need a curly brack. Check the below code.")
console.log("document.addEventListener('click', () => console.log('single click logged.'))")

document.addEventListener("click", () => console.log("single click logged."))
console.log("/nArrow function on an array.")

console.log("\nWe don't need a return function, because it is implied.\nWe don't need a paranthesis around the parameter if we are passing only one.")

let myList = [1, 2, 3]
let myDoubledList = myList.map(x => x * 2);

console.log(myDoubledList)
console.log("\nArrow functions behaves differently with 'this' keyword?")

console.log("\n")
console.log("9.3 Function Hoisting")
console.log("\n")
console.log("1. If we create a function with a name, it can be accessed before and after the function is declared\n2. This is due to function hoisting\n3. This does not happen when you decalare a variable to a anonymous function and call the variable.")

console.log("\n")
console.log("9.4 Template Literals")
console.log("\n")
console.log("Automatic semi-colon insertion")

let myName = "Jack"
console.log(`Hello! My name is ${myName}.`)