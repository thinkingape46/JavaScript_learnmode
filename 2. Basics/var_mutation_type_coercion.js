// Variables and Data Types //

/*
Multi-line commenting.
*/ 

var firstName = 'John'
console.log(firstName)

var lastName = 'Doe'
console.log(lastName)

var carSpeed;
console.log(carSpeed)

carSpeed = '60 kmph'
console.log(carSpeed)

// Variable mutation and type coercion

// here we are going to to add a string to a number.
// Javascript automatically the age type to string, this is call type coercion.
var age = 28;
console.log(firstName+' is '+age+' years old.')

// Declare multiple variables in the same line.
var job, isMarried;
job = 'teacher';
isMarried = false;
console.log('Is he married: '+isMarried)

// Variable mutation

console.log('Age: '+age)
// Here we don't need to use var keyword because, variable age is already defined.
age = 25;
console.log('Age: '+age);

alert('Hello');

var name = prompt('What is your name?');
console.log(name);