//EX 1, first steps and rules for syntax

const add = function(a, b) {
  return a + b;
};

console.log(add(1, 2));

/* Steps --
we remove the function keyword,
then on the right side of the argument list we add an arrow
if there is only one argument then we can drop the parens on the argument
lastly if there is only one line, we can drop the block quotes and the return keyword

arrow functions change how the this keyword is scoped

*/

const newSum = (a, b) => a + b;
console.log(newSum(1, 2));

/**
 * EXAMPLE 2 -- reducing down to omit all parens and blocks ONLY WORKS WITH ONE ARGUMENT
 * BUT CAVEAT if we have no arguments, we still require the parens
 */

const double = number => 2 * number;
console.log(double(2));

// Example 3 -- arrays
const numbersArray = [1, 2, 3];

const dub = numbersArray.map(number => 2 * number);
console.log(dub);

/**
 *VERY IMPORTANT !!! also use cases and why they are so usefull?
 */

// we will map over an array of the members and return a string
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'WinnerSquad',
  teamSummary: function() {
    //this === team
    // we can solve this with var self = this or use the .bind(this) on the end of the map ES5
    return this.members.map(member => {
      // with arrow functions this === this
      // if we use the regular functions we cannot acccess the this keyword since it gets rescoped when nested inside the summary funciton, arrow functions solve this with lexical scope
      return `${member} is onb team ${this.teamName}`;
    });
  }
};

console.log(team.teamSummary());

// what is going on? Lexical this --> broken down lexical = the placement of this term depends on how its interpreted/evaluated, arrow functions make the this keyword behave exactly what we expect it to be
