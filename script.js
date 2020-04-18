// Welcome user and prompt user to generate a password
window.onload = alert("Welcome! Please click 'Generate password' to start!");

// Event listener
  var generateBtn = document.querySelector('#generate')

  generateBtn.addEventListener('click', function() {				
    document.querySelector('#password').value = generate();
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
  if (confirm("This password will contain uppercases")) {
    characters.push("upperCase");
  }

  if (confirm("This password will contain lowercases")) {
    characters.push("lowerCase");
  }

  if (confirm("This password will contain numbers")) {
    characters.push("numeric");
  }

  if (confirm("This password will contain special characters")) {
    characters.push("specialChar");
  }

  // join passwordLength and characterType
  var str = characterType.join('');

  // split into a new array 
  var passwordArray = str.split(" ");
  console.log(passwordArray);

// Generate password function
  
function loop() {
  for (var i = 0; i < passwordLength; i++) {
    // Computer randomly chooses a choice from the options array, based on stored user inputs.
    finalSecurePassword = characterType[Math.floor(Math.random() * passwordArray)];
  }
}