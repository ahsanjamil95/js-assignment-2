// JavaScript Document
/* Chapter 21 - 25 */

// 01

/*var userfisName = prompt("Enter Your First Name");
var userlasName = prompt("Enter Your Last Name");
var userFullname=userfisName+userlasName;
document.write(userFullname);
*/

// 02

/*var mobileModel= prompt("Enter Favrouite Mobile Phone");
document.write(mobileModel+"<br>");
document.write("Length of user Input is: "+mobileModel.length);*/

// 03

/*var countName = "pakistani";
var userInput = prompt("Enter Name");
document.write("String: " +countName+"<br>");

document.write("index of "+ userInput+": " +countName.search(userInput));*/

// 04

/*var msgName = "hello world";
document.write("String: " +msgName+"<br>");

document.write("Last index of : " +msgName.lastIndexOf() ); */

// 05

/*var countName = "pakistani";
var userInput = prompt("Enter Name");
document.write("String: " +countName+"<br>");

document.write("index of "+ userInput+": " +countName.charAt(userInput));*/

// 06

/*var userfisName = prompt("Enter Your First Name");
var userlasName = prompt("Enter Your Last Name");
var userFullname=userfisName.concat(userlasName);
document.write(userFullname);*/

// 07

/*var cityName = "Hyderabad";
var newCity = cityName.replace("Hyder","islam");
document.write(newCity);*/

//08

/*var para = "Ali and Sami are best friends. They play cricket and football together";
var chr = /and/gi;
var newPara = para.replace(chr,"&");
document.write(newPara);*/


// 09

/*var num = 472;
document.write("Value: "+num+"<br>");
document.write("Type: "+ typeof 472+"<br>");
var newNum = num.toString();
document.write("Value: "+num+"<br>");
document.write("Type: "+ typeof newNum); */

// 10 

/*var usInput = "peanuts";
var newInput = usInput.toUpperCase();
document.write("User Input: "+ usInput+"<br>");
document.write("Uppercase: "+newInput);*/

// 11 

/*var usInput = "javascript";
var newInput = usInput.charAt(0).toUpperCase() + usInput.slice(1)
document.write("User Input: "+ usInput+"<br>");
document.write("Uppercase: "+newInput);*/

// 12

/*var userNum = 35.36;
document.write("Number: "+ userNum+"<br>");
var numstr = userNum.toString();
var newNum = Math.trunc(numstr);
document.write("Result: "+ newNum+"<br>");*/

// 13

/*var userInput = prompt("User NAme");
 var restric = /[!@,.]/;
        var isValid = restric.test(userInput);
        if (isValid) {
            alert("Enter Valid User Name.");
        } else {
            alert("User Name is: "+ userInput);
        }
    */

// 14

/*var food = ["cake", "apple pie", "cookie", "chips"," patties"]
var userFood = prompt("Enter Food name");

if(food.indexOf(userFood) != -1){
    document.write("Yes available in "+ food.indexOf(userFood));
}else{
     document.write("No available");
}*/

// 15

/*var userInput = prompt("User Password");
 var restric = /[A-Za-z0-9]/;
        var isValid = restric.test(userInput);
        if (!isValid) {
            alert("Enter Valid Password.");
        } else {
            alert("User Name is: "+ userInput);
        }*/

// 16

/*var uniName = "University of Karachi";

var newUni = uniName.split("");
    
for( var i=0; i<newUni.length; i++){
    
    document.write(newUni[i]+"<br>");
    
}*/


// 17
/*var userInput = "pakistan";
document.write(userInput.charAt(userInput.length - 1));*/


// 18

/*var para = "The quick brown fox jumps over the lazy dog";
var findWord = para.match(/the/g).length;
document.write("The quick brown fox jumps over the lazy dog There are "+findWord+" occurence of word the");*/

/* Chapter 25 - 30 */

// 01

/*var num = 3.45214;
document.write("Number: "+(num)+"<br>");
document.write("Round of value: "+Math.round(num)+"<br>");
document.write("Floor value: "+Math.floor(num)+"<br>");
document.write("Ceil Value: "+Math.ceil(num));*/


// 02

/*var num = -2.673;
document.write("Number: "+(num)+"<br>");
document.write("Round of value: "+Math.round(num)+"<br>");
document.write("Floor value: "+Math.floor(num)+"<br>");
document.write("Ceil Value: "+Math.ceil(num));*/


// 03

var num = -4;
document.write("The absolute value of "+num+" is: "+Math.abs(num)+"<br>");







