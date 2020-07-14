/*
// Creation of object with object literal

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
}
console.log(typeof(john))

// Creating of object with function constructor

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// Creating of an instance of Person object.

var john = new Person('John', 1990, 'teacher');
console.log(typeof(john))


// Lets add a method to the function constructor "Person".
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function() {
        let age = (2020 - this.yearOfBirth);
        console.log(age);
    }    
}
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1980, 'designer');
john.calculateAge()
jane.calculateAge()
*/
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;     
}

Person.prototype.calculateAge = function() {
    let age = (2020 - this.yearOfBirth);
    console.log(age);}

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1980, 'designer');
john.calculateAge()
jane.calculateAge()

// Let's add a property to the prototype.
Person.prototype.species = 'Homo sapiens sapiens'

console.log(Person.species)
console.log(jane.species)