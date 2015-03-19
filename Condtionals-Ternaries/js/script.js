
 /*
  Francis McMillon
  SDI 1503
  //Conditional Logic - Ternary Operators
  3/18/15
 */
var GPA = 48;

 //if the GPA is over the 2.0 score, the student can  graduate
 /*if( GPA > 2.0){
     console.log("You can graduate!");
 }else{
     console.log("GPA is too low!");
 }*/


//(condition) ? do if true : do if false;

 //(GPA > 2.0) ? console.log("You can graduate") : console.log("GPA too low!");


 var age = 6;
 var book;

 //If the child is under 10, they get Green Eggs and Ham, otherwise the get The Time Machine
book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
 console.log(book);