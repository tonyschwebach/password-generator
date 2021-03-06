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
  var securePassword = "";
  
  // create arrays for each of the acceptable characters //  defaulting to true but will be overridden by user confirm choices
  var includeLower = true; 
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  var includeUpper = true;
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  
  var includeNumeric = true;
  var numericChars = ["0","1","2","3","4","5","6","7","8","9"]; //list numbers as string as password should be string type

  var includeSpecial = true;
  var specialChars = ["!","@","#","$","%","^","&","*","(",")"]; // list of special characters in string type

  // prompt user for variable for password length 8-128 characters
  var passwordLength = 0;
  while (passwordLength < 8 || passwordLength >128 || isNaN(passwordLength) ) {
    var passwordLength = prompt("How many characters long would you like your password? Please enter a number between 8 and 128.");
  }


  // define function to add each array of characters to the list of possible password characters 
  function addCharsToPossible(array) {
    for (var j = 0; j < array.length; j++) {
      possibleCharacters.push(array[j]);
    }
  }

   // define function to add random character to to securePassword from given array
   // using this to ensure one character from each required array is provided.
   function addCharsToSecurePassword(array) {
      var randomLetter = array[Math.floor(Math.random()*(array.length))]; //generate random character from possible characters list]
      securePassword = securePassword + randomLetter;
      return securePassword;
    }
  

  // prompt user to include each array of characters. If yes to include, then adds a letter from the array to the password to ensure 
  // that character type is included in the final password. Then adds that character array to possible character for remaining password length.
  includeLower = confirm("Include lower case letters?");
  if(includeLower){
    addCharsToSecurePassword(lowerCase);
    addCharsToPossible(lowerCase);
  }

  includeUpper = confirm("Include upper case letters?");
  if(includeUpper){
    addCharsToSecurePassword(upperCase);
    addCharsToPossible(upperCase);
  }

  includeNumeric = confirm("Include numbers?");
  if(includeNumeric){
    addCharsToSecurePassword(numericChars);
    addCharsToPossible(numericChars);
  }

  includeSpecial = confirm("Include special characters?");
  if(includeSpecial){
    addCharsToSecurePassword(specialChars);
    addCharsToPossible(specialChars);
  }

  // feedback to user if they do not include any of the character arrays. could have also used if po
  if(possibleCharacters.length <1){
    alert("You must use characters in your password. Please click ok on at least one character group to generate another password.");
    return "You must use characters in your password. Please click ok on at least one character group to generate another password.";
  } 
  else {
    // for loop over array of possible characters for password to populate the rest of the securePassword based on passwordLength specified by user.
    for(var j = securePassword.length; j < passwordLength; j++) {
      addCharsToSecurePassword(possibleCharacters);
    }
    // return randomly generated password from this generatePassword function
    return securePassword;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
