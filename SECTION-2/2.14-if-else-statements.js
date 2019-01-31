/* ----------------------------------------------------------------------------[
      If else statements
*/

/*
      Text
*/

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
      console.log(firstName + ' is married!');
} else {
      console.log(firstName + ' will hopefully marry soon.');
}

var isMarried = true;
if (isMarried) {
      console.log(firstName + ' is married!');
} else {
      console.log(firstName + ' will hopefully marry soon.');
}

/*
      if else pt. 2
*/
var marksHeight = 1.73;       // meters
var marksWeight = 85;         // kg

var johnsHeight = 1.94;       // meters
var johnsWeight = 94;         // kg

var bmiMark = marksWeight / (marksHeight * marksHeight);
var bmiJohn = johnsWeight / (johnsHeight * johnsHeight);
console.log('Mark\'s BMI = ' + bmiMark, 'John\'s BMI = ' + bmiJohn);

if (bmiMark > bmiJohn) {
      console.log('Mark\'s BMI is higher than John\'s.');
} else {
      console.log('John\'s BMI is higher than Mark\'s.');
}
