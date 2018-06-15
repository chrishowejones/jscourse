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

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el) {
//     return 2018 - el;
// }

// function isFullAge(el) {
//     return el >= 18;
// }

// function maxHeartRate(el) {
//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     } else {
//         return -1;
//     }
// }

// var ages = arrayCalc(years, calculateAge);
// console.log(ages);

// var fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);

// var rates = arrayCalc(ages, maxHeartRate);
// console.log(rates);

////////////////////////////////////////
// Lecture: Functions returning functions

// function interviewQuestion(job) {
//     if (job === "designer") {
//         return function(name) {
//             console.log(name + ", can you please explain what UX design is?");
//         };
//     } else if (job === "teacher") {
//         return function(name) {
//             console.log("What subject do you teach, " + name + "?");
//         };
//     } else {
//         return function(name) {
//             console.job("Hello, " + name + " what do you do?");
//         };
//     }
// }

// var teacherQuestion = interviewQuestion("teacher");
// var designerQuestion = interviewQuestion("designer");

// teacherQuestion("John");

// designerQuestion("John");
// designerQuestion("Jane");
// designerQuestion("Mark");
// designerQuestion("Mike");

// interviewQuestion("teacher")("Mark");

////////////////////////////////////////////////////////////
// Lecture: IIFE - Immediately invoked Function Expressions

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

// (function() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();


// (function(goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(3);

//////////////////////////////////////////////////
// Lecture: Closures

// function retirement(retirementAge) {
//     var a = " years left to retirement";
//     return function(yearOfBirth) {
//         var age = 2018 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementGermany(1990);
// retirementUS(1990);
// retirementIceland(1990);

// //retirement(66)(1990);

// function interviewQuestion(job) {
//     return function(name) {
//         if (job === "designer") {
//             return console.log(name + ", can you please explain what UX design is?");
//         } else if (job === "teacher") {
//             return console.log("What subject do you teach, " + name + "?");
//         } else {
//             return console.job("Hello, " + name + " what do you do?");
//         }
//     };
// }

// interviewQuestion("teacher")("John");

// interviewQuestion("designer")("Jane");

//////////////////////////////////////////////////
// Lecture: Bind, call and apply

var john = {
    name: "John",
    age: 26,
    job: "teacher",
    presentation: function(style, timeOfDay) {
        if (style === "formal") {
            console.log("Good " + timeOfDay + ", ladies and gentlemen. I'm "
                        + this.name + ", I'm a " + this.job
                       + " and I'm " + this.age + " years old.");
        } else if (style === "friendly") {
            console.log("Hey, what's up. I'm "
                       + this.name + ", I'm a " + this.job
                        + " and I'm " + this.age + " years old."
                       + " Have a nice " + timeOfDay + ".");
        }
    }
}

var emily = {
    name: "Emily",
    age: 35,
    job: "designer"
}

john.presentation("formal", "morning");

john.presentation.call(emily, "friendly", "afternoon");

// apply takes 'self' and an array of arguments
// john.presentation.apply(emily, ["friendl", "afternoon"]);

var johnFriendly = john.presentation.bind(john, "friendly");

johnFriendly("evening");
johnFriendly("night");

var emilyFormal = john.presentation.bind(emily, "formal");

emilyFormal("morning");

var years = [1990, 1965, 1937, 2005, 2000];

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

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
