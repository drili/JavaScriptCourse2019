/* ----------------------------------------------------------------------------[
      Objects and methods
*/

/*
      Example 1
*/
var john = {
      firstName: 'John',
      lastName: 'Smith',
      birthYear: 1990,
      family: ['Jane', 'Mark', 'Bob', 'Emily'],
      job: 'teacher',
      isMarried: false,
      calcAge: function(birthYear) {
            return 2018 - birthYear;
      }
};

console.log(john.calcAge(1990));

/*
      Example 2
*/
var john = {
      firstName: 'John',
      lastName: 'Smith',
      birthYear: 1994,
      family: ['Jane', 'Mark', 'Bob', 'Emily'],
      job: 'teacher',
      isMarried: false,
      calcAge: function() {
            this.age = 2018 - this.birthYear;
      }
};

john.calcAge();
console.log(john);
