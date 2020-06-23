// JavaScript Document
/* Chapter 21 */

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

var userName = "@";
if(userName != '@' && userName != "." && userName != "," && userName != "!"){
	document.write("User Name is : "+ userName); 
   }
else
   { 
	document.write("Enter Valid User name");
   }
