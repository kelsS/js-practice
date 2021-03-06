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
 **/

/*
var ageKelsey = 24;
var ageKaitlyn = 24;
ageJohn = 3 + 5 * 4 - 6;
*/
// What is the operation execution of this sequence?

// First --> 5 * 4
// Then the remaining operations would be executed.

/**
 * To change the operation precedence you wrap the operations you want executed first with parentheses
 **/
/*
ageKelsey = (3 + 5) * 4 - 6;
console.log(ageKelsey);
// In this sequence the addition will be executed first
// Then the rest of the operations will be executed
// Parentheses is called "grouping"

/**
 * You can define the age of both people at the same time
 * Because the = operator has the lowest precedence, it will be executed last
 **/

//ageKelsey = ageKaitlyn = (3 + 5) * 4 - 6;
/**
 * Which = operator will be executed first?
 * This is determined by "Associativity"
 * left-to-right or right-to-left
 * Assignment operators are executed right-to-left
 **/
//ageKelsey = ageKaitlyn = 26
//ageKelsey = 26
/**
 * if the assignment operator was executed left-to-right then ageKelsey would have equaled 24 because ageKelsey was original defined first
 **/
//console.log(ageKelsey);

/**
 * Increment Operator
 **/

/*
 ageKelsey++;
 // adds 1 to the age of Kelsey
 console.log(ageKelsey);
 // Same as writing:
 ageKelsey = ageKelsey + 1;
 console.log(ageKelsey);

 // Incrementing is useful for Loops

 /**
  * Multiplication Operator
  **/

/*
  ageKaitlyn *= 2;
  // takes the age of Kelsey and multiplies it by 2
  console.log(ageKaitlyn);
  // Same as writing:
  ageKaitlyn = ageKaitlyn * 2;
*/
/**
* if/else statements (control structures)
* Allow us to execute only certain parts of the code and/or to execute some parts multiple times
*/

// if/else statements

var name = 'Jim';
var age = '26';
var isMarried = 'No';

if (isMarried === 'yes') {
    //this evaluates to false
    console.log(name + ' is married.');
} else {
    // bc if (is false) the else is executed
    console.log(name + ' is not married.');
}
// output: Jim is not married.

// Change isMarred to true
isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is married.');
} else {
    console.log(name + ' is not married.');
}
// output: Jim is married.

/**
 * if (condition) { 
 *  //code to do something
 * }
 */

// The condition needs to be evaluated to true, so that this part of the if statement gets executed

// If the condition evaluates to false, then the else part gets executed

// Comparison operator -> ===
// === means strictly equals
// Returns a booleans ( true or false value)

// if/else statements allow us to execute code based on conditions

// Change to use boolean
// isMarried = false;
// if(isMarried) {
//     console.log('yes');
// } else {
//     console.log('no');
// }
// why does this work?
// the if statement wants a true or false value which is the bolean data type in JS

// Can write this code simpler
isMarried = false;
if(isMarried) {
    console.log('yes');
}

// without else defined if condition evaluates to false then nothing gets executed (which means nothing happens)

// the else is not necessary but can be very useful

/**
 * 2 types of Comparison Operators
 */

 // Double equal --> ==
 // Triple equal --> ===

 // Double Equal:
 // does type coercion

 // Triple Equal (Strictly equal):
 // does NOT do type coercion

 if (23 == "23") {
     console.log('using double equal')
 }
// Type coercion with the == means that this condition will evaluate to true so console.log will be executed
// This allows JS to decide that 23 the number is equal to "23" the string even though they are different data types
 // Double equals allows JS to use type coercion (automatically converting a variable from one data type to another one)

 // Triple Equals (Stops type coercion)
 if (23 === "23") {
    console.log('using double equal')
}
// === tells JS not to use type coercion
// So this if statement will evaluate to false because 23 the number is a different data type from "23" the string
// So the console.log will not be executed

// To avoid bugs it is best to almost always use the Triple Equals (Strictly Equal) === comparison operator

/**
 * Boolean Logic & Switch Statements
 */

 var age = 16;
  /**
  * Want statement that tells us if the age is under 20 then the person is a teenager
  * if the age is greater than 20 then the person is an adult
  */
 
 if (age < 20) {
     // age is less than 20
    console.log('Person is a teenager');
 } else {
    console.log('Person is an adult');
 }

// If you change the age to be greater than 20 then teh statement evaluates to true

age = 24;
if (age < 20) {
    // age is less than 20
   console.log('The person is a teenager');
} else {
   console.log('The person is an adult');
}
// the else statement is executed

/**
 * Comparison Operators
 */

/** 
 ==
 ===
 < (less than)
 > (greater than)
 <= (less than or equal to)
 >= (greater than or eqaul to)
**/

/**
 * Boolean Logic
 *  - a branch of computer science that deals with true and false values
 *  - very important in coding
 */

/** Logic operators:
    - most important logic operators
    AND (&&) => true if ALL are true
    OR (||) => true if ONE is true
    NOT(!) => inverts true/false value
*/

// Look at truth tables
// AND (&&) Logic Table
    // we have 2 variables -> a and b
    // only if var a and var b are both true
    // the expression a and b will become true
    // in all other cases the result will be false
    // a and be MUST be true
    // if a or b is false then a and b will become false in the end
    // Same applies if more than 2 vars are present
    // only if all vars are true the and expression will also become true

    // OR(||) Logic Table
        /**
         * With the OR operator it is enough that one of the vars are true in order to make a or b become true
         * Only a or b needs to be true
         * result will only be false if BOTH vars are false
         * works the same way with multiple vars
         * it is enough for one var to be true to make the final result true
         */

    // NOT(!) Logic Table
        /**
         * Inverts the true or false value of the variable
         * if var a is true then not a is false
         * if var a is false then not a is true
         */
// define var for age with value
var age = 16;
age >= 20; // => false
age < 30; // => true
!(age < 30); // => false

age >= 20 && age < 30; // => false
age >= 20 || age < 30; // => true

/**
 * We want logi here that says the person is a young adultif they are between 20 and 30 years old
 */
var age = 25;
// execute the if when its condition is true
if (age < 20) {
    console.log('This person is under 20 years old');
    // if it is false execute the else if
} else if (age > 20 && age < 30) {
    console.log('This person is between 20 and 30 years old');
    // if the if statement and the else if are false execute the else statement
} else {
    console.log('This person is an adult')
}

