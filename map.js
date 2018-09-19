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

// Practice Ex#1

/*
 Plucking Values : create a new array that has the height property for each obj,
 */

 var images = [
   {height: '34px', width: '39px'},
   {height: '54px', width: '22px'},
   {height: '140px', width: '123px'},
 ]
var heights = images.map(image =>image.height)
console.log(heights);

/*
Practice ex #2
 create an array that has the speed for each trip.
*/
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(trip => trip.distance/trip.time)
console.log(speeds);


/*
EX 3 - CHALLENGE - implementing a pluck
make a pluck function that accepts an array and a string that represents a property name and returns an array containing that prop for each object

ex: var people = [{name: 'john'}, {name: 'jane'}]
pluck(people, 'name'); --> returns ['john', 'jane']
*/


function pluck(array, property) {
 return array.map( element => element[property]) // make sure to return the computed value
}
console.log(pluck(trips, "time"))
