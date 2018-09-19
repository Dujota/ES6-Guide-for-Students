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
