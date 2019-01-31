/* ----------------------------------------------------------------------------[
      Function statements and expressions
*/

/*
      Function expression:
*/
var whatDoYouDo = function(job, firstName) {
      switch(job) {
            case 'teacher':
                  return firstName + ' teaches kids how to code.';
            case 'driver':
                  return firstName + ' drives a vehicle.';
            case 'designer':
                  return firstName + ' designes beautiful websites.';
            default:
                  return firstName + ' does something else.';
      }
}

console.log(whatDoYouDo('mechanic', 'John'));
console.log(whatDoYouDo('driver', 'Bob'));
console.log(whatDoYouDo('designer', 'Carl'));
