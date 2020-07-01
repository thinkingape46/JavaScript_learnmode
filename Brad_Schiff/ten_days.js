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


// ################# DAY 8 ################### //
// ###### VARIABLE SCOPE AND CONTEXT ######## //

// let myName = "Brad"

console.log("------------------------VARIABLE SCOPE-----------------------")

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