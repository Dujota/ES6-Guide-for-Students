// REDUCE HELPER -- we can pretty much use the reduce helper for anything we have done so far.

//EXAMPLE 1 - Simple sum
// ES5 For loop
var numbers = [10, 20, 30];
sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log('-----REDUCE STARTS HERE -------');
console.log(sum);

// ES6 Reduce function
sumReduced = numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);
console.log('----------');
console.log(sumReduced);
console.log('----------');

/**
 * Example 2 - more advanced
 * // expected outcome ['red', 'yellow', 'blue']
 */
var primaryColors = [{ color: 'red' }, { color: 'yellow' }, { color: 'blue' }];

// IMPORTANT:: the main trick for reduce is to think about what the default/starting value is going to be!!!!
color = primaryColors.reduce(function(previous, primaryColor) {
  // be careful what you call the 1st argument
  previous.push(primaryColor.color); // do your logic first to make a change
  return previous; // then return the accumilator/previous value change
}, []);
console.log(color);

/**
 * Example 3 - interview questions with reduce - ACE THAT INTERVIEW!!!!
 * The balanced parans question
 */

// Given a string with some # of paranthesis, return true/false if the expression is balanced

/**
 * Steps: 1 - make a counter to keep track of the parens
 *  +1 if open parens
 * -1 if closing parens
 * return the counter if any char != parens
 * turn statement to boolean by adding ! to the front of it (positive/negative # as truthy and 0 as falsey )
 * finally catch the edgecase where the parens are flipped
 */

function balancedParens(string) {
  return !string.split('').reduce((prev, char) => {
    if (prev < 0) {
      return prev;
    } // needs to be ontop otherwise it will always be 0 at )()

    if (char === '(') {
      return ++prev;
    }

    if (char === ')') {
      return --prev;
    }

    return prev; // we want to still return the coutner just in casse there is a char that doesnt meet the if statementsimport {  } from "module";
  }, 0); // lets make a counter, where we will increase if open parens and decrease if closed parens
}

console.log('((((', balancedParens('((((')); // false
console.log('()', balancedParens('()')); // true
console.log(')(', balancedParens(')(')); // false

/**
 * REDUCE EXERCISES!!!!!!
 */

// Ex 1, sum of all the distance travelled

var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance = trips.reduce((sum, trip) => {
  return (sum += trip.distance);
}, 0);
console.log('----------');
console.log(totalDistance);
console.log('----------');

/**
 * Example 2 - crete an obj that tracks tge # of sittings and standing desks.
 * should have hte form {sutting: #, standing: #}
 * HINT:: Dont forget to return the accumulator object
 */

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(
  function(accumulator, desk) {
    if (desk.type === 'sitting') {
      ++accumulator.sitting;
    } else {
      ++accumulator.standing;
    }
    return accumulator;
  },
  { sitting: 0, standing: 0 }
);

console.log(deskTypes);
