// Lecture: variables
/*
  var name = 'John';
  console.log(name);

  var lastName = 'Smith';
  console.log(lastName);

  var age = 26;
  console.log(age);

  var fullAge = true;
  console.log(fullAge);
*/

// Lecture: Variables 2
/*
  var name = 'John';
  var age = 26;

  // console.log(name + age);
  // console.log(age + age);

  var job, isMarried;

  // console.log(job);

  job = 'teacher';
  isMarried = false;

  console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? '
  + isMarried + '.');

  age = 'thirty six';
  job = "driver";

  console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? '
  + isMarried + '.');

  var lastName = prompt("What is the last name?");
  console.log(lastName);

  alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? '
  + isMarried + '.');
*/

// Lecture : Operators
/*
  var now = 2018;
  var birthYear = now - 26;

  birthYear = now - 26 * 2;
  // 2018 - 52
  // 1966

  console.log(birthYear);

  var ageJohn = 30;
  var ageMark = 30;

  ageJohn = ageMark  = (3 + 5) * 4 - 6;
  // ageJohn = ageMark = 26
  // ageJohn = 26
  console.log(ageJohn);
  console.log(ageMark);

  ageJohn++;
  ageMark *= 2;

  console.log(ageJohn);
  console.log(ageMark);
*/

//////////////////////////////////
// Lecture: if/else statements
/*
  var name = "John";
  var age = 26;
  var isMarried = "yes";

  if (isMarried === "yes") {
  console.log(name + " is married!");
  } else {
  console.log(name + " will hopefully marry soon :)");
  }

  isMarried = true;


  // if (isMarried) {
  //     console.log("Married!");
  // } else {
  //     console.log("Not married!");
  // }

  if (isMarried) {
  console.log("Married!");
  }

  if (23 === "23") {
  console.log("Something to print...");
  }
*/


////////////////////////////////////////
// Lecture: boolean logic and switch
/*
var age = 20;

if (age < 20) {
    console.log("John is a teenager.");
} else if (age >= 20 && age < 30) {
    console.log("John is a young man.");
} else {
    console.log("John is a man.");
}

var job = "teacher";

job = prompt("What does John do?:");

switch (job) {
case "teacher":
    console.log("John teaches kids.");
    break;
case "driver":
    console.log("John drives a cab in Lisbon.");
    break;
case "cop":
    console.log("John helps fight crime");
    break;
default:
    console.log("John does something else.");
}
*/

////////////////////////////////////////
// Coding challenge: 1

/*
var player1 = "John";
var player2 = "Mark";
var player3 = "Fred";

var player1Age = 31;
var player2Age = 31;
var player3Age = 30;

var player1Height = 122;
var player2Height = 182;
var player3Height = 182;

var player1Score = player1Height + player1Age * 5;
var player2Score = player2Height + player2Age * 5;
var player3Score = player3Height + player3Age * 5;

if (player1Score > player2Score && player1Score > player3Score) {
    console.log(player1 + " wins with a score of: " + player1Score +
                " to " + player2 + "'s score of: " + player2Score +
                " and " + player3 + "'s score of: " + player3Score + ".");
} else if (player1Score < player2Score && player2Score > player3Score) {
    console.log(player2 + " wins with a score of: " + player2Score +
                " to " + player1 + "'s score of: " + player1Score +
                " and " + player3 + "'s score of: " + player3Score +".");
} else if (player3Score > player2Score && player3Score > player1Score) {
    console.log(player3 + " wins with a score of: " + player3Score +
                " to " + player1 + "'s score of: " + player1Score +
                " and " + player2 + "'s score of: " + player2Score +".");
} else if (player3Score === player2Score && player3Score > player1Score) {
    console.log(player3 + " draws with "+ player2 + " with a score of: " + player3Score +
                " to " + player1 + "'s score of: " + player1Score + ".");
} else if (player2Score === player1Score && player1Score > player3Score) {
    console.log(player1 + " draws with "+ player2 + " with a score of: " + player1Score +
                " to " + player3 + "'s score of: " + player3Score + ".");
} else if (player1Score === player3Score && player1Score > player2Score) {
    console.log(player1 + " draws with "+ player3 + " with a score of: " + player1Score +
                " to " + player2 + "'s score of: " + player2Score + ".");
} else {
    console.log("Game is a draw. All players have a score of: " + player1Score);
}
*/


////////////////////////////////////////
// Lecture: Functions
/*
function calculateAge(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
console.log("John's age: " + ageJohn);
console.log("Mike's age: " + ageMike);
console.log("Mary's age: " + ageMary);

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement >= 0) {
        console.log(name + " retires in " + retirement + " years.");
    } else {
        console.log(name + " is already retired.");
    }

}

yearsUntilRetirement("John", 1990);
yearsUntilRetirement("Mike", 1969);
yearsUntilRetirement("Mary", 1948);
*/

////////////////////////////////////////
// Lecture: Statements and expressions
/*
// function statement
function someFun(par) {
    // code
}

// function expression
var someFun = function(par) {
    // code
}

// expressions
3 + 4;
var x = 3;

// statements
if (x == 5) {
    // do something
}

*/

////////////////////////////////////////
// Lecuture: Arrays
/*
var names = ["John", "Jane", "Mark"];
var years = new Array(1990, 1969, 1948);

// read value for John
console.log(names[0]);
names[1] = "Ben";
console.log(names);

// name, lastName, yearOfBirth, isMarried
var john = ["John", "Smith", 1990, "designer", false];

john.push("blue");
john.unshift("Mr");
var favColour = john.pop();
john.shift();
console.log(john);
console.log(favColour);

if (john.indexOf("teacher") === -1) {
    console.log("John is not a teacher");
}

*/

////////////////////////////////////////
// Lecture: Objects and properties
/*
var john = {
    name: "John",
    lastName: "Smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false
};

console.log(john.lastName);
console.log(john["lastName"]);

var xyz = "job";
console.log(john[xyz]);

john.lastName = "Miller";
john["job"] = "programmer";

console.log(john);

var jane = new Object();
jane.name = "Jane";
jane.lastName = "Smith";
jane["yearOfBirth"] = 1969;
jane["job"] = "retired";
jane["isMarried"] = true;

console.log(jane);
*/

////////////////////////////////////////
// Lecture: Objects and methods

// v1.0
/*
var john = {
    name: "John",
    lastName: "Smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false,
    family: ["Jane", "Mark", "Bob"],
    calculateAge: function() {
        return 2016 - this.yearOfBirth;
    }
};

console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;

console.log(john);
*/

// v2.0
/*
var john = {
    name: "John",
    lastName: "Smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false,
    family: ["Jane", "Mark", "Bob"],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

john.calculateAge();

console.log(john);

var mike = {
    name: "Mike",
    lastName: "Smith",
    yearOfBirth: 1950,
    job: "teacher",
    isMarried: false,
    family: ["Jane", "Mark", "Bob"],
    calculateAge: function() {
        this.age = 2016 - this.yearOfBirth;
    }
};

mike.calculateAge();

console.log(mike);
*/

////////////////////////////////////////
// Lecture: Loops and iteration
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}


var names = ["John", "Jane", "Mary", "Mark", "Bob"];


// for loops
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}

// while loops
var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

for (var i = 1; i <= 10; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);

    if (i === 5) {
        break;
    }
}
*/

////////////////////////////////////////
// Lecture; Coding Challenge 2
var birthYears = [2001, 1985, 2008, 1992];

function fullAge(yearsOfBirth) {
    var ages = [];
    for (var i = 0; i < yearsOfBirth.length; i++) {
        ages.push(2018 - yearsOfBirth[i]);
    }

    var fullAges = [];

    for (i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            console.log("Person " + (i + 1) +
                        " is " + ages[i] +
                        " years old, and is of full age.");
            fullAges.push(true);
        } else {
            console.log("Person " + (i + 1) +
                        " is " + ages[i] +
                        " years old, and is NOT of full age.");
            fullAges.push(false);

        }
    }
    return fullAges;
}

console.log(fullAge(birthYears));
