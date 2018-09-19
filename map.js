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


// more complicated example of Map: - array of cars objects

var cars = [
  {model: 'Chevrolet', price: 'cheap'},
  {model: 'BMW', price: 'expensive'}
];

// this is a very common practice in front end frameworks for extracting data from a backend response
var prices = cars.map(car =>{
  return car.price // referred as a pluck
})
console.log(prices);

// The primary goal of most web apps are just rendering lists of data, this is why map is the most popular used array helper because it does not mutate any data.
