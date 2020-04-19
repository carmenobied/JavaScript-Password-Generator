// Welcome user and prompt user to generate a password
window.onload = alert("Welcome! Please click 'Generate password' to start!");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {

// User input variables (strings): 
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "0123456789";
  var specialChar = "!$^*&#-=~+_?@$%^{}()";

var passwordLength = parseInt(prompt("How many characters would you like in your password? Choose between 8 and 128"));

  // First validate user input .Then continue user input prompts.
    if (!passwordLength) {
      alert("This password needs a value. Please try again!");
      return;
    }

    else if (passwordLength < 8 || passwordLength > 128) {
      alert("Password length must be between 8 and 128 characters. Please try again!");
      return;
    } 

var confirmUpperCaseChar = confirm("Do you want this password to contain uppercases?");
var confirmLowerCaseChar = confirm("Do you want this password to contain lowercases?");
var confirmNumericChar = confirm("Do you want this password to contain numbers?");
var confirmSpecialChar = confirm("Do you want this password to special characters?");

// Push and store user input into the array

var characterType = [];
  if (confirmUpperCaseChar) {
    characterType.push(upperCase);
  }

  if (confirmLowerCaseChar) {
    characterType.push(lowerCase);
  }

  if (confirmNumericChar) {
    characterType.push(numeric);
  }

  if (confirmSpecialChar) {
    characterType.push(specialChar);
  }

  var characterTypeJoined = characterType.join('');
  
  var passwordFinal = "";
  for (var i = 0, n = characterTypeJoined.length; i < passwordLength; i++) {
    // Computer randomly chooses a choice from the options array, based on stored user inputs.
  passwordFinal += characterTypeJoined.charAt(Math.floor(Math.random() * n));
   }
   var passwordText = document.querySelector("#password");
   passwordText.value = passwordFinal;
  } 