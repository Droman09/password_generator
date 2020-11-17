// Assignment Code

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  
  // select lenght from 8 - 128

  var lenght = window.prompt("How many characters would you like your password to be?");

  if (!lenght) { 
    return}
   
 while(!lenght || lenght < 8 ||lenght > 128){
    lenght = window.prompt("You must chooose between a number between 8 and 128")
  }

    // confirm prompts 

  var confirmUpper = window.confirm("Confirm if you like to include Uppercase letters.");
  var confirmLower = window.confirm("Confirm if you like to include Lowercase letters.");
  var confirmNumber = window.confirm("Confirm if you like to include numbers.");
  var confirmSpecial = window.confirm("Confirm if you like to include symbols.")

  // repeat if no prompts selected 

  while (!confirmUpper && !confirmLower && !confirmNumber && !confirmSpecial) { 
    window.alert("please select one");
    var confirmUpper = window.confirm("Confirm if you like to include Uppercase letters.")
    var confirmLower = window.confirm("Confirm if you like to include Lowercase letters.")
    var confirmNumber = window.confirm("Confirm if you like to include numbers.")
    var confirmSpecial = window.confirm("Confirm if you like to include symbols.")
  }

  // assign

  var passwordCharacters = []
      
    if (confirmUpper) {
      passwordCharacters = passwordCharacters.concat(upper)
    }

    if (confirmLower) {
      passwordCharacters = passwordCharacters.concat(lower)
    }
      
    if (confirmNumber) {
      passwordCharacters = passwordCharacters.concat(number)
    }

    if (confirmSpecial) {
      passwordCharacters = passwordCharacters.concat(special)
    }

      console.log(passwordCharacters)

  // password generated on the page
  var randomPassword = ""
      
  for (var i = 0; i < lenght; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  // return alert(randomPassword);
  var password = randomPassword
  var passwordText = document.querySelector("#password");

  // change style when given results
  passwordText.style.fontSize = "30px";
  passwordText.style.paddingBottom = "15px";

// shows results 
  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
