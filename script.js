// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

// starting with the generator functions below

document.getElementById(“password”)

generateBtn.addEventListener("generate", writePassword);

function getRandomLower() {

    return(String.fromCharCode()}
    
    console.log(Math.random() * 10)


// for (var i = 0; i < 10; i++) {
//     // Generate a random number between 1 and 10
//     // Math.floor will round down, meaning we would get a number between 0 and 9, so we'll always add 1 to bump it up.
//     var num = Math.floor(Math.random() * 10) + 1;

//     // Display in console
// //     console.log(num);
//   }

// passwordLength = parseInt(prompt("Please select a password length between 8 and 128 characters."));
