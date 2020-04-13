# JavaScript: Password Generator

The goal was to create an application that generates a random password based on user-selected criteria. This app runs in the browser and features dynamically updated HTML and CSS powered by the JavaScript code. This also involved ensuring the app features a clean and polished UI, with a responsive layout, ensuring it adapts to multiple screen sizes. Employees with access to sensitive data will often need to be able to randomly generate a password that meets certain criteria so that they can create a strong password that provides greater security.

## Installation
```bash
i. Fork the Github repository.
ii. Clone the forked repo into your local machine using gitbash/terminal to pull the project and data.
iii. Access the index.html, portfolio.html and contact.html files and assets via Visual Studio or in your browser to view the code and website respectively.  
iv. Check the site on different devices and screens to see the responsiveness.
```

## Usage
JavaScript Components Used:
```bash
function() - function generatePassword() - Math.random() - Math.floor() - charAt() method - .toString() method - document.getElementByID()
```

See screenshot below for reference: 
![Password Generator](/assets/03-javascript-homework-demo.png)

## Key Checks Included ensuring the following:
i. WHEN user clicks button to generate password >
THEN user is presented with series of prompts for password criteria
ii. WHEN prompted for password criteria > THEN user selects which criteria to include in password
iii. WHEN prompted for length of password > THEN user chooses length of at least 8 characters and no more than 128 characters
iv. WHEN user is prompted for character types to include in password > THEN user chooses lowercase, uppercase, numeric, and/or special characters
v. WHEN user answers each prompt > THEN user input should be validated and at least one character type should be selected
vi. WHEN all prompts are answered > THEN password is generated that matches the selected criteria
vii. WHEN password is generated > THEN password is either displayed in an alert or written to the page
