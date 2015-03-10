
 /*
  Francis McMillon
  SDI 1503
  Go To Training Week 2
  First foray into expressions
  3/9/15
 */

//alert('JavaScript Works!"');

 //variables
 var myAddress = "123 Elm Street"; //This is a string data type
 var milesToStore = 15.5; //Numbers never are surrounded by quotes (see strings)
 var isThereConstruction = true; //not surrounded by quotes (Boolean value)
 var myState = "Florida";
 var myFirstName;
 var myLastName;
 var myAge;


 //prompts
 //  TODO: Add prompts

 myFirstName = prompt("Please enter your first name:");
 myLastName = prompt("Please enter your last name:");
 myAge = prompt("What is your age?");
 myAge = Number(myAge);

 //outputs
 //  TODO: Add some outputs
 console.log("Your name is " + myFirstName + " " + myLastName + ".");
 console.log("Your age in two years will be " + (myAge + 2) + ".")

 //myState = prompt("What state do your live in");