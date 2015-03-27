
 /*
  Francis McMillon
  SDI 1503
  Functions Assignment - The Florida Lottery (Powerball)
  3/26/15
 */

 //My Variables
 var playDate = prompt("Enter Date of Desired Play, i.e, MO/DAY/YEAR:");

 var quickPicks;
 var powerBall;

 //My Functions
 function quickPick(tickNumbers) {

     console.log("You entered: " + playDate);

     var timesClicked = 1;

     while (tickNumbers === "") {

         playDate = prompt("You did not enter a date.\n\nPlease enter your desired date of play! Thanks!!!");

         timesClicked++;

         if (timesClicked === 3) {
             console.log("Congratulations! We generated your Quick Pick numbers for " + playDate + ". Good Luck!");
             break;
         }
     }

     return tickNumbers;

 }

 function randomNumGen(min, max, num) {

     var randomArray = [];

     //Math.random() * (max - min) + 10
     for (var i = 0; i < num; i++) {

         var RandomNumber = Math.round(Math.random() * (max - min) + min);

         randomArray[i] = RandomNumber;

     }

     return randomArray;
 }

 //My main code (Output)
 playDate   = quickPick(playDate);
 console.log("Your ticket is dated " + playDate + ". Good Luck your numbers are as follows:");

 quickPicks = randomNumGen(1, 59);// 5 random lottery numbers 1 thru 59
 console.log(quickPicks);

 powerBall  = randomNumGen(1, 35);// 1 random lottery number 1 thru 35
 console.log(powerBall);

