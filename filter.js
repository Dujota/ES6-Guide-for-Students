/**
 * common ui feature is a way to filter/sort of lists - like get a filtered list of products
 */

 var products = [
   {name: "glasses", type: "casual"},
   {name: "button shirt", type: "formal"},
   {name: "t-shirt", type: "casual"},
   {name: "suit", type: "formal"}
 ];

 // use case -- these are products on a product page and maybe the user clicks a button that triggers a filter on that list

 // ES5 Way of how the filter works
 var filteredProducts = []
 for (var i = 0; i < products.length; i++) {
   if (products[i].type === "casual"){
     filteredProducts.push(products[i])
   }
 }
console.table(filteredProducts);

// this is an exact case of why we do not mutate an original array as the filter should only display a modified version of the original array, instead of removing the  records from the db -- we want to create a subset of values


// ES6 version of the filter method
var filtered = products.filter(product => product.type === "formal")
console.table(filtered);
