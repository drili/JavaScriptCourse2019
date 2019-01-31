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

// Object
var mark = {
      firstName: 'Mark',
      lastName: 'Peterson',
      height: 1.73, // meters
      weight: 85, // kg
      calcBMI: function() {
            this.bmi = this.weight / (this.height * this.height);
      }
};

var john = {
      firstName: 'John',
      lastName: 'Bobby',
      height: 1.94,
      weight: 94,
      calcBMI: function() {
            this.bmi = this.weight / (this.height * this.height);
      }
}

mark.calcBMI();
john.calcBMI();
console.log(mark, john);

console.log(mark.firstName + ' ' + mark.lastName + ' has a BMI of ' + mark.bmi + ' while ' + mark.firstName + ' ' + mark.lastName + ' has a BMI of ' + john.bmi);



/*
      Jonas' solution
*/
var john = {
      fullName: 'John Smith',
      mass: 92,
      height: 1.95,
      calcBMI: function() {
            this.bmi = this.mass / (this.height * this.height);
            return this.bmi;
      }
}

var mark = {
      fullName: 'Mark Miller',
      mass: 79,
      height: 1.69,
      calcBMI: function() {
            this.bmi = this.mass / (this.height * this.height);
            return this.bmi;
      }
}

john.calcBMI();
mark.calcBMI();
console.log(john, mark);

if (john.bmi > mark.bmi) {
      console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
      console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
      console.log('They have the same BMI');
}
