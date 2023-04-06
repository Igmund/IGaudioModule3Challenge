// Assignment Code
//Query selectors
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

//Variables
var asymbols = " `~!@#$%^&*()_-+=[{]}|:\;\"\<\>\.?/";
var alowercase = "qwertyuiopasdfghjklzxcvbnm";
var auppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var anumbers = "1234567890";
var optionsVariable = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
//Prevent page refresh on button click
  event.preventDefault();

//Clear current password
password.value === "";
var randomString = "";

//Select password configuration
var symbolsq = confirm("Hey I heard you want a password with symbols?");
var lowercaseq = confirm("And you also want it to have lowercase letters?");
var uppercaseq = confirm("And you want uppercase letters too? Geez bit needy");
var numbersq = confirm("Let me guess.. numbers?");
var lengthq = prompt("Input length please, somewhere between 8 and 128.");

//Check correct length
if (lengthq < 8 || lengthq > 128) {
alert("Do you have dyscalcula? I said between 8 and 128! Let's try that again pal");
var lengthq = prompt("Input length please, somewhere between 8 and 128.");
}

//If answer is no to alll try again
else if (symbolsq === false && lowercaseq === false && uppercaseq === false && numbersq === false) {
  alert("What are you even doing here? Want a password made of nothing? Try again pal");
var symbolsq = confirm("Hey I heard you want a password with symbols?");
var lowercaseq = confirm("And you also want it to have lowercase letters?");
var uppercaseq = confirm("And you want uppercase letters too? Geez bit needy");
var numbersq = confirm("Let me guess.. numbers?");
var lengthq = prompt("Input length please, somewhere between 8 and 128.");
}

//Check correct length
if (lengthq < 8 || lengthq > 128) {
  alert("Do you have dyscalcula? I said between 8 and 128! Let's try that again pal");
  var lengthq = prompt("Input length please, somewhere between 8 and 128.");
  }


//var lengthq= prompt("Input length please, somewhere between 8 and 128.")

//Generate password based on selection
if (symbolsq) {
  optionsVariable += asymbols;
}

if (lowercaseq) {
optionsVariable += alowercase;
}

if (uppercaseq) {
optionsVariable += auppercase;
}

if (numbersq) {
optionsVariable += anumbers;
}
//loop
for (var i = 0; i < lengthq; i++) {
randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));

}
//Write the password
password.value = randomString;




}



