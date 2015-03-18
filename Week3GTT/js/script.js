
 /*
  Francis McMillon
  SDI 1503
  Week 3 Go To Training Session
  3/16/15
 */
 //alert("JavaScript works!");

 //variables
 var myAddress       = "123 Elm Street"; //string variable
 var myFavoriteStore = "\"Publix\" Supermarket";////string value with escapes
 var milesToStore    = 6.5;//miles to store
 var construction    = false; //Boolean indicating construction

 //outputs
 console.log("I live at " + myAddress + ".");
 console.log("I shop at " + myFavoriteStore + ".");
 console.log("It's only " + milesToStore + " miles to the store.");
 console.log("It is " + construction + " that there is construction enroute.");

 //confirm - return true if OK is clicked. False if CANCEL is clicked.
 construction = confirm("Is there still construction?  Ok for true, or CANCEL for false.");

 //Boolean conditional
 if (construction === true) {
     //code that runs if construction is true
     var extraMiles = prompt("How many more miles is it to the store?");
     extraMiles = Number(extraMiles);

     if (extraMiles >= 3) {
         //this code runs if construction is true and extraMiles >= 3
         extraMiles = extraMiles + milesToStore;
         console.log("The total miles will be " + extraMiles + ".");

     }else{

         //code that runs if construction is tru and extraMiles < 3
         console.log("We aren't adding much to the ride.");
     }
 } else {
     //code that runs if construction is false
     //console.log("Nope, no construction today");
     console.log("No, the road is clear.");
     var myEmptyString = prompt("What store would like to visit?");

     if (myEmptyString === "") {

         myEmptyString = prompt("Please enter a store name.");
         console.log("You want to go to " + myEmptyString + ".");

     } else {

         console.log("Okay, let's go there");
     }
 }

 console.log("Let's go to the store!");