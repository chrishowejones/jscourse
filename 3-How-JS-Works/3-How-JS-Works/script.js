///////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1955);

function calculateAge(year) {
    console.log(2016 - year);
}


// won't work as can't hoist fn expression.
// retirement(1965);


var retirement = function(year) {
    console.log(65 - (2016 - year));
}

retirement(1990);


//variables
console.log(age); // age = undefined
var age = 23;
console.log(age); // age = 23

function foo() {
    console.log(age); // age = undefined
    var age = 65;
    console.log(age); // age = 65
}
foo();
console.log(age); // age = 23
*/

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);

// calculateAge(1990);

// function calculateAge(year) {
//     console.log(2016 - year);
//     console.log(this);
// }

var john = {
    name: "John",
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this); // John object
        console.log(2016 - this.yearOfBirth);
        /*
        function innerFunction() {
            console.log(this); // Window object
        }

        innerFunction();
        */
    }
};

 john.calculateAge();

var mike = {
    name: "Mike",
    yearOfBirth: 1984

};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
