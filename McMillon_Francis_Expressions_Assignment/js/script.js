
 /*
  Francis McMillon
  SDI 1503
  Expressions Assignment
  3/12/15
 */


 //variables
 var topMuscleCars = "Mustang" + "Corvette" + "GTO" + "Challenger"; //This is a string data types of vehicles
 var topSpeed = 131; //Top speed of vehicle
 var CouldMoreBeAddedToList = true; //Yes, other vehicles can be added to this list
 var myFavorite = "GTO";//My favorite muscle car of the 70s
 var theFastestMuscleCar;
 var theSlowestMuscleCar;
 var yearsDriving;

 //Below are the top speeds of each vehicle in the 1972

 var Challenger = 105;
 var GTO = 112;
 var Mustang = 111;
 var Corvette = 131;

 var averageSpeed = (Challenger + GTO + Mustang + Corvette)/4;//the sum of top speeds divided by the number of vehicles which is 4

 //The following are my prompts
 theFastestMuscleCar = prompt("Challenger, Corvette, GTO, Mustang; which do you believe is the fastest muscle car?");
 theSlowestMuscleCar = prompt("Challenger, Corvette, GTO, Mustang; which do you believe may be the slowest muscle car?");
 myFirstName = prompt("Please enter your first name:");
 myLastName = prompt("Please enter your last name:");
 yearsDriving = prompt("How many years driving experience do you have?");
 yearsDriving = Number(yearsDriving);

 //The following is the output of all data placed from prompt of users
 console.log("The Fastest Muscle Car Is " + theFastestMuscleCar + ".");
 console.log("The Slowest Muscle Car Is " + theSlowestMuscleCar + ".");
 console.log("Your name is " + myFirstName + " " + myLastName + ".");
 console.log("I have been driving for " + (yearsDriving) + ".");
 console.log("The average speed of all vehicles recorded " + (averageSpeed) + " MPH" + ".");//Average speed of vehicles is 114.75