/*
*/

var a = 3;
var b = a;
console.log(b);
a = 5;
console.log(b);

var objOne = {
    name: "John",
    job: "teacher"
}
var objTwo = objOne;
console.log(objTwo.name)
// Let's change the value of name property to "Emma".

objOne.name = "Emma";
console.log(objTwo.name)

console.log(`a outside function: ${a}`)
function change(a, b) {
    a = 50;
    b.job = "physicist";
    console.log(`a inside function: ${a}`)
}

change(a, objOne)
console.log(`a outside function: ${a}`)
console.log(objOne.job)