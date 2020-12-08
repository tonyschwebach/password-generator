// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  return "t3mp p@SSw0rD";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
