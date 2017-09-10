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