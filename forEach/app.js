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

// EX#1 - refactor the for loop into a forEach function

// ES5
function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];

  for (var i = 0; i < posts.length; i++) {
    savePost(posts[i]);
  }
}


// ES6-REFACTORED

function handlePosts() {
  var posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
  ];

  posts.forEach(item => {
    savePost(item)
  });
}



