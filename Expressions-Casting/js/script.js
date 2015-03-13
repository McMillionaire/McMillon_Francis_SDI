/**
 * Created by McMillionaire on 1/18/15.
 */
//Casting, Treating STRINGS like NUMBERS and vice versa

//var stringVar = "6";
//var result = 7 + Number(stringVar);
//console.log(result);

var areaCode = 407;
var firstPart = 203;
var secPart = 4529
//407 203-4529
var phoneNo = "(" + String(areaCode) + ")" + String(firstPart) + "-" + String(secPart);
console.log(phoneNo);
//Remember to add the + sign to string, which is called CONCATENATING