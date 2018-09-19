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

// Example # 2
var products = [
  {name: "glasses", type: "casual", quantity: 0, price: 1 },
  {name: "button shirt", type: "formal", quantity: 10, price: 14},
  {name: "t-shirt", type: "casual", quantity: 7, price: 8},
  {name: "suit", type: "formal", quantity: 17, price: 150}
];

// show me casual clothing that is in stock that is less than $10
var filterUseCase = products.filter( product => {
  return product.type === "casual"
  && product.quantity > 0
  && product.price < 10
})

console.log('--------------------');
console.table(filterUseCase);


/*
 USE CASE # 3  -- blog app or form, where posts can have multiple comments and we want to see all comments associated with a specific post
 */

var post = {id: 4, title: "This is my New blog Post"}

var comments = [
  {postID: 4, content: 'Great post!'},
  {postID: 3, content: 'Good idea, maybe I will try it'},
  {postID: 4, content: 'Wow, thank you so much'},
]

// make a function that accepts the post and the comments array so we can compare and create the boolean for the filter
function commentsForPosts(post, comments) {
  return comments.filter(comment => comment.postID === post.id) // we access a post's id and filter out any comment that has the foreign key of the post id
}

console.log("Below is the filtered list for the comments based on their relation");
console.table(commentsForPosts(post, comments))

// this is the most use cases for filter, as we use it on the front end to work with client-side data


/*
 Practice Ex # 1
 return any number greater than 50 in a new array
 */

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(num => num > 50)

console.log(filteredNumbers);
