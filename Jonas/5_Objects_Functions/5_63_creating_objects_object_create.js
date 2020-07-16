/*
// Object.create method


var personProto = {
    calculateAge: function() {
        console.log(2020 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = "John";
john.dateofBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
    name: {value: "Jane"},
    yearOfBirth: {value: 1980},
    job: {value: "designer"}
})

*/