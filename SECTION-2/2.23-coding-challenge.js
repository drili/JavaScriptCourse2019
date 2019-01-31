/* ----------------------------------------------------------------------------[
      Coding challenge
*/

/*
      My solution
*/
function calculateTip(billAmount) {
      if (billAmount <= 50) {
            var tip20 = (billAmount * 0.2);
            console.log('John paid 20% of ' + billAmount + ' which is equal to $' + tip20);
      } else if (billAmount > 51 && billAmount <= 200) {
            var tip15 = (billAmount * 0.15);
            console.log('John paid 15% of ' + billAmount + ' which is equal to $' + tip15);
      } else if (billAmount > 200) {
            var tip10 = (billAmount * 0.10);
            console.log('John paid 10% of ' + billAmount + ' which is equal to $' + tip10);
      }
}

calculateTip(250);
calculateTip(10);
calculateTip(75);

var tips = [20, 15, 10];
var paidAmounts = ['15 ' + '20', '75 ' + '15', '205 ' + '10'];
console.log(tips);
console.log(paidAmounts);



/*
      Jonas' solution
*/
function tipCalculator(bill) {
      var percentage;
      if (bill < 50) {
            percentage = .2;
      } else if (bill >= 50 && bill < 200) {
            percentage = .15;
      } else {
            percentage = .1;
      }
      return percentage * bill;
}

console.log(tipCalculator(10));

var bills = [124, 48, 268];

var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                  bills[1] + tips[1],
                  bills[2] + tips[2]];
console.log(tips, finalValues);
