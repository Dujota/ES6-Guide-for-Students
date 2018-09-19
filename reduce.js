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
