/* ----------------------------------------------------------------------------[
      Functions
*/

/*
      Text...
*/
function calculateAge(birthYear) {
      return 2018 - birthYear;
}

var ageJohn = calculateAge(1994);
var ageMike = calculateAge(1892);
console.log(ageJohn, ageMike);

function yearsUntilRetirement(year, firstName) {
      var age = calculateAge(year);
      var retirement = 65 - age;

      if (age <= 65) {
            console.log(firstName + ' retires in ' + retirement + ' years.');
      } else {
            console.log(firstName + ' already retired ' + retirement + ' years ago');
      }

}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1946, 'Bob');
