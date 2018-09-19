// REDUCE HELPER -- we can pretty much use the reduce helper for anything we have done so far.

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
