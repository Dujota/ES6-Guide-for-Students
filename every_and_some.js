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