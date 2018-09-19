var numbers = [1,2,3]
var doubledNums = [];

// ES5 for loop -- mimic how the map function works
for (let index = 0; index < numbers.length; index++) {
  doubledNums.push(numbers[index] * 2);
}

// Map only duplicates the array and returns a NEW array always
console.log("doubled", doubledNums);
console.log("numbers", numbers);

// Map helper
var doubled = numbers.map(number => {
  return number * 2 // always make sure you use the return keyword!!!
})

// has the same result as the for loop iteration
console.log("map function:", doubled);
