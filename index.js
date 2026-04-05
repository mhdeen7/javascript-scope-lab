// global variable
const burgers = ["Hamburger", "Cheeseburger"]; 
// Create an array called burgers with 2 items
const featuredDrinks = ["Strawberry Milkshake"];
// Create an array called featuredDrinks with 1 item

//function-scoped variable
function addBurger() {
    var newBurger = "Flatburger";
    // create a  function-scoped variable and assign it "Flatburger"
    burgers.push(newBurger);
    // add the value of the newburger to the burgrs array
   
     // block-scoped variable
    if(true) {
        let anotherNewBurger = "Maple Bacon Burger";
        // create a block-scoped variable and assign it "Maple Bacon Burger"
        burgers.push(anotherNewBurger);
        // add the value of anotherNewBurger to the burgers array
    }
}
addBurger();
// call the addBurger function
console.log(burgers);
// print the burgers array to the console

function changeFeaturedDrink() {
    featuredDrinks[0] = "The JavaShake";
    // change the value of the first item in the featuredDrinks array to "The JavaShake "
}
changeFeaturedDrink();
// call the changeFeaturedDrink function
console.log(featuredDrinks);
// print the featuredDrinks array to the console