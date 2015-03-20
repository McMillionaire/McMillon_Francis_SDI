
 /*
  Francis McMillon
  SDI 1503
  Conditional Assignment
  3/18/15
 */
 //alert("JavaScript works!");

 //variables
 var highSchoolName  = "Leavenworth Senior High School"; //string variable name of high school
 var schoolMascot    = "Pioneer Pete";//my high school mascot name
 var yearsAttended   = 3;//1974 to 1977 - years I attended
 var graduated       = true; //Boolean which will return a true or false and in my case true
 var attendCollege   = "Attend College of your choice";//Option to attend college
 var juniorCollege   = "I will have to attend junior college first";//no option, junior college first

 //outputs
 console.log("I attended " + highSchoolName + ".");//printout showing name of high school
 console.log("Our mascot's name is " + schoolMascot + ".");//printout showing mascot name
 console.log("I attended for " + yearsAttended + " years!  Fall semester of 1974 to Spring semester of 1977.");//First and last semesters at high school
 console.log("It's " + graduated + " that I graduated in May of 1977.");//printout showing whether true or false

 //confirm - return true if OK is clicked. False if CANCEL is clicked.
 graduated = confirm("I graduated with a high school diploma?  Press OK if you BELIEVE this is the truth, or CANCEL if you THINK this to be false.");//User input, choose OK or Cancel

 //Boolean conditional
 if (graduated === true) {
     //code that runs if graduation date is true
     var lessYears = prompt("How many more years could possibly be added to my graduation date?");
     lessYears = Number(lessYears);

     if (lessYears <= 3) {
         //this code runs if graduation date is true and actual yearsAttended <= 3
         lessYears = lessYears + yearsAttended;
         console.log("The total years you think it took for me to obtain my high school diploma " + lessYears + ".");

     }else{

         //code that runs if graduation date is true and lessYears < 3
         console.log("If adding my 9th grade year.");
     }
 } else {
     //code that runs if graduation is false
     //console.log("I will only consider LHS");
     console.log("No, I only consider the 3 years at Leavenworth High School.");
     var myEmptyString = prompt("What school did you attend?");

     //if the graduated in less than 4 years is less and can I attend college
     if(attendCollege < yearsAttended && attendCollege > 3){
         console.log("You can attend College.");
     }else{
         console.log("You must attend a junior or community college first.");
     }

     if (myEmptyString === "") {

         myEmptyString = prompt("Please enter the name of your high school.");
         console.log("You want to go to " + myEmptyString + ".");

     } else {

         console.log("Nah, attending there is not an option!");
     }


 }

 console.log("Welcome! You're about to enter PioneerLand!");