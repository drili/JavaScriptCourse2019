/* ----------------------------------------------------------------------------[
      Coding challenges
*/

/*
      My solution
*/
var johnsTeam = (89 + 120 + 103) / 3;
var mikesTeam = (240 + 210 + 101) / 3;
var marysTeam = (200 + 210 + 101) / 3;

if (johnsTeam > mikesTeam && johnsTeam > marysTeam) {
      console.log('John\'s team is the winner with ' + johnsTeam + ' points.');
} else if (marysTeam > johnsTeam && marysTeam > mikesTeam) {
      console.log('Mary\s team is the winner with ' + marysTeam + ' points.');
} else if (mikesTeam > johnsTeam && mikesTeam > marysTeam) {
      console.log('Mike\s team is the winner with ' + mikesTeam + ' points.');
} else if (johnsTeam === mikesTeam && johnsTeam === marysTeam && mikesTeam === marysTeam) {
      console.log('The score is a tie, all are winners.');
} else if (johnsTeam === mikesTeam && johnsTeam > marysTeam) {
      console.log('John and Mike are equal, while Mary has lower points.');
} else if (mikesTeam === marysTeam && mikesTeam > johnsTeam) {
      console.log('Mike and Mary are equal, while John has lower points.');
} else if (marysTeam === johnsTeam && johnsTeam > mikesTeam) {
      console.log('Mary and John are equal, while Mike has lower points.');
}

/*
      Jonas' solution
*/
var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
      console.log('John wins with ' + scoreJohn + ' points.');
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
      console.log('Mike wins with ' + scoreMike + ' points.');
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
      console.log('Mary wins with ' + scoreMary + ' points.');
} else {
      console.log('There is a draw');
}

// if (scoreJohn > scoreMike) {
//       console.log('John\s team wins with ' + scoreJohn + ' points');
// } else if (scoreMike > scoreJohn) {
//       console.log('Mike\s team wins with ' + scoreMike + ' points');
// } else {
//       console.log('There is a draw');
// }
