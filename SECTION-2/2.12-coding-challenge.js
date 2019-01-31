/* ----------------------------------------------------------------------------[
      Coding challenge
*/

/*
      My solution
*/

var marksHeight = 1.73;       // meters
var marksWeight = 85;         // kg

var johnsHeight = 1.94;       // meters
var johnsWeight = 94;         // kg

var bmiMark = marksWeight / (marksHeight * marksHeight);
var bmiJohn = johnsWeight / (johnsHeight * johnsHeight);
console.log('Mark\'s BMI = ' + bmiMark, 'John\'s BMI = ' + bmiJohn);

var markHasHigherBMI;
markHasHigherBMI = bmiMark > bmiJohn;
console.log(markHasHigherBMI);
console.log('Is Mark\'s BMI higher than John\'s? = ' + markHasHigherBMI + '.' + ' His BMI is ' + bmiMark);
