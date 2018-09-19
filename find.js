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
