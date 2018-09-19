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


/**
 * USE CASES ? ---> lets say you have an index, and a user clicks on a single post, that redirects to a show page, based on the url which has the post id, then you wold go to the list of posts and then find the specific one with the params id === posts.id
 */


 /**
  * PRACTICE EXERCISES!!!
  */

  // find the admin
 var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(user => user.admin)
console.log(admin);

//Practice # 2 -> find the account with balance of 12
var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(account => account.balance >= 12)
console.log(account);

/**
 *  Practice #3 - CHALLENGE!
 * a very common operation is to an object that has a given prop
 * create a shorthand to refactor this common operaion
 * ex: findWhere(ladders, {height: '20 feet'});
 * the object {ladders: '20'} should be used as the search parameter - basically find the ladder who's height is aprx 20 feet
 * findWhere(ladders, {height:25}); --> returns{id:3, height: 25}
 *
 * HINT - Hard part is figuring out what the name of the prop is on criteria ,  you can use Object.keys(criteria)[0] to

 */

 var ladders = [
   {id: 1, height: 20},
   {id: 2, height: 40},
   {id: 3, height: 25}
 ]

 function findWhere(array, criteria) {
   property = Object.keys(criteria)[0] // check the mdn docs for explanation
  return array.find(
    element => {
      return element[property] === criteria[property]
    }
  )
}

console.log(findWhere(ladders, {height:25}))