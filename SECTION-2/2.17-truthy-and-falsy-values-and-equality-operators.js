/* ----------------------------------------------------------------------------[
      Truthy and falsy values and equality operators
*/

/*
      Falsy values: undefined, null, 0, '', NaN (not a number)
      Truthy values: NOT falsy values
*/

var height;
height = 23;

if (height || height === 0) {
      console.log('Variable is defined.');
} else {
      console.log('Variable is NOT defined.');
}

/*
      Equality operators:
      === (strict equality operator)
      == (type coercion, datatypes do not have to match)
*/
if (height == '23') {
      console.log('The == operator does type coercion');
}
