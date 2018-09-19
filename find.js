/**
 * purpose is to search through the array and look for a particular element and return that record back
 * CAVEAT -- it only returns the 1st record even if there are other records that may satisfy the find clause
 */

 var users = [
   {name: 'john'},
   {name: 'mary'},
   {name: 'steve'},
 ]

 // ES5 way -- set up the user var and then use a for loop to navigate through the array and then re-assign the match ti the initialized variable
 var user;
 // issue , we do not break out of the loop when we find the user unless we do a break statement
 for (var i = 0; i < users.length; i++) {
   if (users[i].name === 'john'){
     user = users[i]
     break;
   }
 }
 console.log("ES5", user);

 // ES6 Find helper
es6User = users.find(user => {
  return user.name === 'john'
})
console.log("ES6", es6User);

/**
 * example 2 - find specific criteria in a collection
 */

 // using fucntion constructors
 function Car(model) {
   this.model = model
 }

 // create an array using the Car constructor for objects
 var cars = [
   new Car('X3'),
   new Car('Focus'),
   new Car('Corvette')
 ]

 filteredCards = cars.find(car => car.model === 'X3')
 console.log(filteredCards);

 /**
  * Ex 2, re-use the posts array but we will hbave a single comment that has a post
  */

var posts =  [
  {id: 1, title: "First post"},
  {id: 2, title: "Second post"},
]

comment = {postId:1, content:"So cool! "}

// takes a big list of postas and a single comments and find the post with a particular id
function postForComments (posts, comment) {
  return posts.find(post => post.id === comment.postId)
}
console.log(postForComments(posts, comment))
// most use cases are for when you are looking for a specific item out of a collection
