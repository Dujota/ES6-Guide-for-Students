/**
 * STOP USING VAR!!!!!!!!
 * IMPORTANT!!!!!!! const and let re-assign the this keyword to a block scope rather than a function scope!!!!!
 */

// RULE: const for things that wont change and let for anything that will be dynamic
//RULE: const must have an initial value, let can be undefined

const name = 'John'; // someone's first name wont change most likely
let age; // age changes every year
const DOB = '10/10/90'; // you can only be born on a single day or so we hope!!

// Refactor

var statuses = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
var message = '';
var currentCode = 'OK';

for (var i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}

// REFACTORED TO :

const statuses2 = [
  { code: 'OK', response: 'Request successful' },
  { code: 'FAILED', response: 'There was an error with your request' },
  { code: 'PENDING', response: 'Your reqeust is still pending' }
];
let message2 = '';
const currentCode2 = 'OK';

for (let i = 0; i < statuses.length; i++) {
  if (statuses[i].code === currentCode) {
    message = statuses[i].response;
  }
}
