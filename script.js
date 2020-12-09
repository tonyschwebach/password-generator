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
  
  // create arrays for each of the acceptable characters
  var includeLower = true;
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  var includeUpper = true;
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  
  var includeNumeric = true;
  var numericChars = ["0","1","2","3","4","5","6","7","8","9"]; //list numbers as string as password should be string type

  var includeSpecial = true;
  var specialChars = ["!","@","#","$","%","^","&","*","(",")"]; // list of special characters in string type

  // prompt user for variable for password length 8-128 characters
  var passwordLength = 12;


  // while (passwordLength < 8 || passwordLength >128 || typeof passwordLength !== "number") {
  //   var passwordLength = prompt("How many characters long would you like your password? Please enter a number between 8 and 128.");
  //   if(typeof parseInt(passwordLength) === "number"){
  //     return passwordLength;
  //   }
  //   console.log(passwordLength);
  //   console.log(typeof passwordLength);
  // }



  // define function to add each array of characters to the list of possible password characters 
  function addCharsToPossible(array) {
    for (var j = 0; j < array.length; j++) {
      possibleCharacters.push(array[j]);
    }
  }

  
// prompt user to include each array of characters
  includeLower = confirm("Include lower case letters?");
  if(includeLower){
    addCharsToPossible(lowerCase);
  }

  includeUpper = confirm("Include upper case letters?");
  if(includeUpper){
    addCharsToPossible(upperCase);
  }

  includeNumeric = confirm("Include numbers?");
  if(includeNumeric){
    addCharsToPossible(numericChars);
  }

  includeSpecial = confirm("Include special characters?");
  if(includeSpecial){
    addCharsToPossible(specialChars);
  }

  // feedback to user if they do not include any of the character arrays 
  if(includeLower===false && includeUpper ===false && includeNumeric ===false && includeSpecial ===false){
    alert("You must use characters in your password. Please click ok on at least one character group to generate another password.");
    return "You must use characters in your password. Please click ok on at least one character group to generate another password.";
  }


  // for loop over array of possible characters for password length -3 number of times. last 3 characters will be reserved to ensure each requested character type is used
  for(var j = 0; j < passwordLength-3; j++) {
    var randomLetter = possibleCharacters[Math.floor(Math.random()*(possibleCharacters.length))]; //generate random character from possible characters list]
    securePassword = securePassword + randomLetter;
  }
  console.log(securePassword);

  // if(includeLower) {
  //   for(var j = 0; j < securePassword.length; j++){
  //     securePassword
  //   }
  // }




  // return randomly generated password from this generatePassword function
  return securePassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
