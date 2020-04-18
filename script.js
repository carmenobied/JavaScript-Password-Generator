// Welcome user and prompt user to generate a password
window.onload = alert("Welcome! Please click 'Generate password' to start!");

// Event listener
  var generateBtn = document.getElementbyId('#generate')

  generateBtn.addEventListener('click', function() {				
    document.getElementById('#password').value = generate();
  });

// User input variables (strings): 
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "0123456789";
  var specialChar = "!$^*&#-=+_?@$%^{}()";

  // var all = ["upperCase", "lowerCase", "numeric", + "specialChar"];

  var passwordLength = parseInt(prompt("How many characters would you like in your password? Choose between 8 and 128"));

// First validate user input .Then continue user input prompts.
if (!passwordLength) {
      alert("This password needs a value");
    }
    else if (passwordLength < 8 || passwordLength > 128) {
      passwordLength = parseInt(prompt("Password length must be between 8 and 128 characters."));
    } 

    else(passwordLength);

var characterType = [];
  if (confirm("Do you want this password to contain uppercases")) {
    characterType.push("upperCase");
  }

  if (confirm("Do you want this password to contain lowercases")) {
    characterType.push("lowerCase");
  }

  if (confirm("Do you want this password to contain numbers")) {
    characterType.push("numeric");
  }

  if (confirm("Do you want this password to special characters")) {
    characterType.push("specialChar");
  }

  // join passwordLength and characterType
  var str = characterType.join('');

  // split into a new array 
  var passwordArray = str.split(" ");
  console.log(passwordArray);

// Generate password function
  
function generatePassword () {
  for (var i = 0; i < +passwordLength; i++) {
    // Computer randomly chooses a choice from the options array, based on stored user inputs.
    password = characterType.charAt(Math.floor(Math.random() * passwordArray));
  }
}
