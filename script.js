// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// define function for generating random password 
function generatePassword(){
// blank array for possible characters
  var possibleCharacters = [];
  
  // create arrays for each of the acceptable characters
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  var upperCase = []; // loop over lower case letters to make an array of upper case letters so I don't have to type them again 
  for(i=0; i<lowerCase.length; i++) {
    upperCase.push(lowerCase[i].toUpperCase());
  }
  var numbericChars = ["0","1","2","3","4","5","6","7","8","9"]; //list as string as password should be string type
  var specialChars = ["!","@","#","$","%","^","&","*","(",")"]; // list of special characters in string type

  // prompt user for variable for password length 8-128 characters
  var passwordLength = 0;
  // console.log(typeof passwordLength);

  // while (passwordLength < 8 || passwordLength >128 || typeof passwordLength !== "number") {
  //   var passwordLength = prompt("How many characters long would you like your password? Please enter a number between 8 and 128.");
  //   if(typeof parseInt(passwordLength) === "number"){
  //     return passwordLength;
  //   }
  //   console.log(passwordLength);
  //   console.log(typeof passwordLength);
  // }





// prompt user to include each array of special characters
// push array of chars to possible array
// for loop over possible array for password length number of times
// randomly select letter and add to new password









  return "t3mp p@SSw0rD";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
