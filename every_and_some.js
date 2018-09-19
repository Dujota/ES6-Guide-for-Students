/**
 * Array helper that condense dowwn to one element
 */

 var computers = [
   {name: 'Apple', ram: 24},
   {name: 'Acer', ram: 32},
   {name: 'Compaq', ram: 8}
 ]

 //ES5 for loop to see how it works

 // lets find all the PCs that have more than 16G of ram -- but we dont want to get a collection, but rather just know if we can run the program or not? yes/no?
 var allComputersCanRunProgram = true;
 var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i]
  if (computer.ram <16){
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

console.log("all PCs", allComputersCanRunProgram);
console.log("Some PCs", onlySomeComputersCanRunProgram);

// there is a lot of logic here and it would take a bit of time to figure this out if we have not seen this before, even if it does work

console.log('ES6 ---------------------------------------');
// ES6 EVERY HELPER
var all = computers.every( computer => {
  return computer.ram > 16
})
console.log("ALL ES6", all);

//ES6 SOME HELPER
var some = computers.some( computer => {
  return computer.ram > 16
})
console.log("SOME ES6", some);

console.log('--------------------------------------------');


// find out if any or all name is more than 4 chars
var names = [
  "alexei",
  "mat",
  "joe"
]

console.log(names.every(name => name.length > 4))
console.log(names.some(name => name.length > 4))


// PRACTICAL USE OF EVERY & SOME

// Use Cases? everywhere !!!! lets look at a login form
// before we submit the form to the server and sign in, we want to validate that the user had filled in the form.

function Field (value) {
  this.value = value
}

// add a validation to the prototype so we can check against it on every instance of the field class
Field.prototype.validate = function (){
  return this.value.length > 0
}

// we can now instanciate the object and pass in the field
var username = new Field("newUser");
var password = new Field("myPassword")

// later we add:
var birthdate = new Field("10/20/1990")

console.log('--------------------------------------------');
// we would then run it all by doing this. but imagine it scales to 100 fields?
 console.log(username.validate() && password.validate())
console.log('--------------------------------------------');

// instead wed can make all our vsrs into one array and then run our every function against it
var fields = [username, password, birthdate]

validated = fields.every(field => {
  return field.validate()
})
console.log(validated);

// somewhere down the code we can then do

if (validated) {
  // allow user to submit
} else {
  // show an error message to user
}

console.log('--------------------------------------------');

// PRACTICE EXAMPLES!!!!!!
/**
 * EX # 1
 * find out if every user has submitted the request form
 */

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(user => user.hasSubmitted)
console.log(hasSubmitted);
console.log('--------------------------------------------');

/**
 * EX # 2
 * given the list of network requests, confirm if any have the status pending
 */

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(req => req.status === "pending")

console.log(inProgress);