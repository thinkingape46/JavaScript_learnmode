// 5_62_prototype_chain_in_console

let Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

var john = new Person('John', 1990, 'teacher');

Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth)
}
Person.prototype.genus = "Homo";
/*


*/