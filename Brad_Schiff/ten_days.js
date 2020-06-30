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

let pets = [
    {name: "Tracy", species: "cat", age: 1},
    {name: "Camper", species: "dog", age: 2},
    {name: "Brits", species: "dog", age: 5}
  ]

let onlyDogs = pets.filter(filterDogs)
// filter(filterDogs) returns an array of dogs, since this is an array and filter function is still available.
// We add another filter function i.e. filterBabies.
// Chain of filter and map methods.
let onlyBabies = pets.filter(filterDogs).filter(filterBabies).map(onlyNames)

function filterDogs(x) {
    return x.species == "dog"
}

function filterBabies(x) {
    return x.age < 5
}

function onlyNames(x) {
    return x.name
}

console.log(onlyDogs)
console.log(onlyBabies)