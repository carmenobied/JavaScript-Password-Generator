// Assignment Code
var generateBtn = document.querySelector("#generate");

// Welcome user and prompt user to generate a password
window.onload = alert("Welcome! Please click 'Generate password' to start!");

// User input variables: 
var enter;
var Num;
var SpecialChar;
var Uppercase;
var Lowercase;

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

// WHEN user clicks button to generate password: THEN user is presented with series of prompts for password criteria

// Function to generate password
function generatePassword() {

// Asks for user input
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));

// WHEN prompted for password criteria: THEN user selects which criteria to include in password

// First validate user input.
  if (!enter) {
    alert("This password needs a value");
    } 

// When prompted for length of password, then user chooses length of at least 8 characters and no more than 128 characters
// passwordLength = parseInt(prompt("Please select a password length between 8 and 128 characters."));
  else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must select a password length between 8 and 128 characters."));
    } 
  else {

    // Once user input is validated, continue user input prompts
    Num = confirm("Will this password contain numbers?");
    SpecialChar = confirm("Will this password contain special characters?");
    Uppercase = confirm("Will this password contain Uppercase letters?");
    Lowercase = confirm("Will this password containLowercase letters?");
      };

// WHEN user is prompted for character types to include in password: THEN user chooses lowercase, uppercase, numeric, and/or special characters
      // Lower case 
      function getRandomLower() {
        return(String.fromCharCode((Math.floor(Math.random() * 26) + 97); 
      }

      // Upper case 
      function getRandomUpper() {
          return(String.fromCharCode((Math.floor(Math.random() * 26) + 97); 
      }

      // Upper case 
      function getRandomNumber()) {
        return(String.fromCharCode((Math.floor(Math.random() * 10) + 48); 
      }
          
      // Upper case 
      function getRandomSymbol() {
        const symbols = !@#%^&*{}[],.
        return symbols [Math.floor(Math.random() * symbols.length]; 
      }

// WHEN user answers each prompt: THEN user input should be validated and at least one character type should be selected

// WHEN all prompts are answered: THEN password is generated that matches the selected criteria
  for (var i = 0; i < enter; i++) {
  var num = numx [Math.floor(Math.random() * numx.length)];
  push() 

// WHEN password is generated: THEN password is either displayed in an alert or written to the page.
  document.getElementById("password");
  alert("This password needs a value");

// // Notes: 
// //  for (var i = 0; i < x; i++) {
// //     var num = x [Math.floor(Math.random() * x.length)];
// //      console.log(num);}
// // passwordLength = parseInt(prompt("Please select a password length between 8 and 128 characters."));

// Password criteria:
// - Minimum length of 8 characters, max 128
// - Contains a lowercase letter
// - Contains an uppercase letter
// - Contains a number or special character 