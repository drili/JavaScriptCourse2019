/* ----------------------------------------------------------------------------[
      Basic operators:
*/

var year, yearJohn, yearMark, ageJohn, ageMark;
now = 2018;
ageJohn = 28;
ageMark = 33;
/*
      Math operators:
      -, *, + (etc)
*/
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);
console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

/*
      Logical operators:
      <, >, =, (etc)
*/
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

/*
      Typeof operators:
*/
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
