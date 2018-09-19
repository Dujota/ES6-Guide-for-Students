//SIMPLE EXAMPLE:

// Create an arrray of numbers
var numbers = [1, 2, 3, 4, 5];
// create a variable to hold the sum
var sum = 0;
// we can define the function outside the array helper and we can pass it into the actual helper
function adder(number) {
  sum += number
 }
// loop over the array, incremeneting the sum variable
numbers.forEach(adder);
// print the sum variable
console.log(sum);


//  When to use forEach helper - whenever we want to call soem method multiuple times passing in a different argument each time, consider using the forEach helper

