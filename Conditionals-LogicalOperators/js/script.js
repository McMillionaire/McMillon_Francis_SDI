
 /*
  Francis McMillon
  SDI 1503
  Conditional Logic - Logical Operators
  3/18/15
 */
var budget = 300;
 var iPhonePrice = 199.99;
 var payCheck = 200;

 //if the price of phone is less than our budget AND if our paycheck is over 300
 //&& Operator only goes between booleans
 if(iPhonePrice < budget && payCheck > 300){
     console.log("We can buy the phone");
 }else{
     console.log("No phone for you!!!");
 }

 // The "OR" operator

 var budget = 100;
 var iPhonePrice = 199.99;
 var wonLottery = true;

 //if the price of phone is less than our budget AND if our paycheck is over 300
 //&& Operator only goes between booleans
 if(iPhonePrice < budget || wonLottery){
     console.log("We can buy the phone");
 }else{
     console.log("No phone for you!!!");
 }

 //"NOT" Operator or negation