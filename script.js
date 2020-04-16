// Assignment Code
var generateBtn = document.querySelector("#generate");

// Welcome user and prompt user to generate a password
window.onload = alert("Welcome! Please click 'Generate password' to start!");

// // User input variables (strings): 
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var specialChar = "!$^*&#-=+_?@$%^()";

var generateButton = document.getElementById('btn');

// Event listener to generate button
generateButton.addEventListener('click', writePassword);

// WHEN user clicks button to generate password: THEN user is presented with series of prompts for password criteria
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to generate password + // Asks for user input
// When prompted for length of password, then user chooses length of at least 8 characters and no more than 128 characters
// passwordLength = parseInt(prompt("Please select a password length between 8 and 128 characters."));

function generatePassword() {
  var passwordLength = parseInt(prompt("How many characters would you like in your password? Choose between 8 and 128"));
  
// First validate user input.Then continue user input prompts.

for (i=0; i<passwordLength;i++) {

  if (!passwordLength) {
    alert("This password needs a value");
    } 

  else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("You must select a password length between 8 and 128 characters."));
    } 

  else {
    lowerCase = confirm("Do you want this password to contain lowercases?");
    upperCase = confirm("Do you want this password to contain uppercases?");
    numeric = confirm("Do you want this password to contain numbers?");
    specialChar = confirm("Do you want this password to contain special characters?");

// WHEN prompted for password criteria: THEN user selects which criteria to include in password

// WHEN user is prompted for character types to include in password, THEN user chooses lowercase, uppercase, numeric, and/or special characters
      // Lowercase 
      function getRandomLower() {
        return(String.fromCharCode((Math.floor(Math.random() * 26) + 97); 
      }

      // Uppercase 
      function getRandomUpper() {
          return(String.fromCharCode((Math.floor(Math.random() * 26) + 97); 
      }

      for (var i = 0; i < input.length; i++) {
        if (input[i] === input[i].toUpperCase()) { 
          return true;
        }
      }
    };

      // Numeric
      function getRandomNumber()) {
        return(String.fromCharCode((Math.floor(Math.random() * 10) + 48); 
      }
          
      // Special character
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