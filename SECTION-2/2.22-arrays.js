/* ----------------------------------------------------------------------------[
      Arrays
*/

/*
      Text...
*/
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0], years[2]);

// Show how many elements of an array:
console.log(names.length);

// Mutate data inside array
names[1] = 'Ben';
console.log(names[1]);

// Add data to Arrays
names[5] = 'Mary';
console.log(names);

names[names.length] = 'Bobby';
console.log(names);

// Different datatypes
var john = ['John', 'Smith', 1990, 'teacher', false];

// array methods
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
console.log(isDesigner);
