// Welcome user and prompt user to generate a password
window.onload = alert("Welcome! Please click 'Generate password' to start!");

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

// User input variables (strings): 
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "0123456789";
  var specialChar = "!$^*&#-=~+_?@$%^{}()";
  var charTypeCount = 0;

  // var all = ["upperCase", "lowerCase", "numeric", + "specialChar"];

  var passwordLength = parseInt(prompt("How many characters would you like in your password? Choose between 8 and 128"));

// First validate user input .Then continue user input prompts.
if (!passwordLength) {
      alert("This password needs a value. Please try again!");
    }

    else if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = parseInt(prompt("Password length must be between 8 and 128 characters. Please try again!"));
    } 

    else (passwordLength) 
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

// Join passwordLength and characterType
  var str = characterType.join('');

// Split into a new array 
  var passwordArray = str.split("");

// Call passwordRandom to return passwordFinal
  var passwordFinal = '';

passwordFinal = passwordRandom((passwordLength - charTypeCount), characterType);
return passwordFinal;
} 
  
function passwordRandom(passwordLength, passwordArray) {
    var pwd = "";
    for (var i = 0; i < passwordLength; i++) {
    // Computer randomly chooses a choice from the options array, based on stored user inputs.
    pwd += pwd + passwordArray[0].charAt(Math.floor(Math.random() * passwordArray.length - 1));
    return pwd;
  }
} 