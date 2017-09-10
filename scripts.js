// var name = 'Kelsey';
// console.log(name);

// var lastName = 'Swanson';
// console.log(lastName);

// var age = 24;
// console.log(age);

// /**
//  * Find out if a person has a full age or * not
//  * Uses boolean logic
//  */ 

// var fullAge = true;
// console.log(fullAge);

/**
 * Variable Mutation and Type Coercion
 */

 var name = 'Kelsey';
 var age = 24;
 console.log(name + age);
 // output: Kelsey24

// Why does JS change the number value of age to a string?
// This is called Type Coercion
// Type Coercion appears in Dynamically typed programming languages
// JS automatically converts the number to a string
// Also happens with the other data types
// This happens when we mix data types

// What is happening behind the scenes?
// JS attempts to automatically figure out which variables it needs to convert then converts them all to the same data type

// Type Coercion means JS converts some data types to a different one on the fly when it needs to.

// We can declare a variable or multiple and not define it (them)immediately

/*
var job, isMarried;
// 2 currently undefined variables
console.log(job);
// output: undefined
console.log(isMarried);
// output: undefined

// Now declare the variables
// You do not need to write var again because var is only necessary when first declaring variables

job = 'Web Developer';
isMarried = false;
console.log(name + ' ' + job + ' ' + age + ' ' + isMarried);
// output: Kelsey Web Developer 24 false

// to add a spaces between output use an empty string with a space in it
// ' ' -> string with space inside
// '' -> totally empty string

// Better sentence
console.log(name + ' is a ' + age + ' year old ' + job + '.' + ' Is she married? ' + isMarried + '.');

// Can change the value of variables
// This is called variable mutation

age = 30;
job = 'Software Engineer';
isMarried = true;
console.log(name + ' is a ' + age + ' year old ' + job + '.' + ' Is she married? ' + isMarried + '.');
// output: Kelsey is a 30 year old Software Engineer. Is she married? true.
// Now variable values are mutated

// Our code is read in a sequence of instructions from line to line by the client (browser).

// Get data from the console

//define a variable
var lastName = prompt('Enter your last name.');
// prompt(); causes a dialog window to pop up and allow a user to enter data
console.log(lastName);
// logs whatever was typed into dialog window
// alert(); is used to display a message to the user
// prompt() vs. alert()
// prompt is used to get user input
// alert is used for message pop ups and debugging
alert(name + ' is a ' + age + ' year old ' + job + '.' + ' Is she married? ' + isMarried + '.');
*/

/**
 * Operators
 */

// Find out the year of someone's birth

// JS code to echo current year
var currentYear = new Date().getFullYear();
console.log(currentYear);
var birthYear = currentYear - 24;


birthYear = currentYear - 24 * 2;
console.log(birthYear);
// First JS does the multiplication of 24 * 2
// Then Subtracts the result of the operation from the current year (in this case 2017)

// Why does JS do the multiplication operation first then the subtraction operation?

// This is the concept called Precedents of Operators
// In JS there is Operator Precedents
// Defines which operators are preformed first or executed first in the sequence
// As well as which operations are executed after

// Multiplication always comes before subtraction in math
// But in JS we do not always know which operations will be executed first

/**
 * Operator Precedents Cheat Sheet Resource
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
 * 
 * Operators with a higher precedence are executed first
 */

var ageKelsey = 24;
var ageKaitlyn = 24;
ageJohn = 3 + 5 * 4 - 6;

// What is the operation execution of this sequence?

// First --> 5 * 4
// Then the remaining operations would be executed.

/**
 * To change the operation precedence you wrap the operations you want executed first with parentheses
 */
ageKelsey = (3 + 5) * 4 - 6;
console.log(ageKelsey);
// In this sequence the addition will be executed first
// Then the rest of the operations will be executed
// Parentheses is called "grouping"

/**
 * You can define the age of both people at the same time
 * Because the = operator has the lowest precedence, it will be executed last
 */
ageKelsey = ageKaitlyn = (3 + 5) * 4 - 6;
/**
 * Which = operator will be executed first?
 * This is determined by "Associativity"
 * left-to-right or right-to-left
 * Assignment operators are executed right-to-left
 */
//ageKelsey = ageKaitlyn = 26
//ageKelsey = 26
/**
 * if the assignment operator was executed left-to-right then ageKelsey would have equaled 24 because ageKelsey was original defined first
 */
console.log(ageKelsey);

/**
 * Increment Operator
 */

 ageKelsey++;
 // adds 1 to the age of Kelsey
 console.log(ageKelsey);
 // Same as writing:
 ageKelsey = ageKelsey + 1;
 console.log(ageKelsey);

 // Incrementing is useful for Loops

 /**
  * Multiplication Operator
  */
  ageKaitlyn *= 2;
  // takes the age of Kelsey and multiplies it by 2
  console.log(ageKaitlyn);
  // Same as writing:
  ageKaitlyn = ageKaitlyn * 2;