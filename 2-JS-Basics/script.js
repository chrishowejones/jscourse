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
