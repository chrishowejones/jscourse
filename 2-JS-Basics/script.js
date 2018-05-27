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
