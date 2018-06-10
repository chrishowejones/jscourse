// Function constructor

// var john = {
//     name: "John",
//     yearOfBirth: 1990,
//     job: "teacher"
// };

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// };

// Person.prototype.calculateAge = function() {
//     console.log(2018 - this.yearOfBirth);
// };

// Person.prototype.lastName = "Smith";

// var john = new Person("John", 1990, "teacher");
// var jane = new Person("Jane", 1968, "designer");
// var mark = new Person("Mark", 1948, "retired");

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

// var personProto = {
//     calculateAge: function() {
//         console.log("Age of " + this.name + " is " + (2018 - this.yearOfBirth));
//     }
// };

// var john2 = Object.create(personProto);
// john2.name = "John";
// john2.yearOfBirth = 1990;
// john2.job = "teacher";

// var jane2 = Object.create(personProto, {
//     name: { value: "Jane" },
//     yearOfBirth: { value: 1969 },
//     job: { value: "designer" }
// });

// john2.calculateAge();
// jane2.calculateAge();

// Primitives vs objects

// Primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// // Objects
// var obj1 = {
//     name: "John",
//     age: 26
// };

// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);

// // Functions
// var age = 27;
// var obj = {
//     name: "Jonas",
//     city: "Lisbon"
// };

// function change(a, b) {
//     a = 30;
//     b.city = "San Francisco";
// }

// change(age, obj);

// console.log(age);
// console.log(obj.city);

////////////////////////////////////////
// Lecture: Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);
