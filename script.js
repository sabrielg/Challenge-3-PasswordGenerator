// Assignment Code
var specialCharacters = [ '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',
']','[','~','-','_','.',];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a','b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
var finalPassword = []
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  finalPassword = []
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var counter = 0
  var mainArray = []
  var userLength = prompt("how long would you like your password to be?");
  if (userLength < 8 || userLength > 128) {
    alert("Your password length must be between 8 and 128.");
    return;
  }
  var special = confirm("do you want special characters?");
  var lower = confirm ("would you like to include lower case letters?");
  var number = confirm ("would you like to include numbers?");
  var upper = confirm ("Would you like to include Uppcase letters?");

  if (special) {
    var random = Math.floor(Math.random()* specialCharacters.length);
    var randomCharacter = specialCharacters[random];
    finalPassword.push(randomCharacter)
    counter ++
    for (var i = 0; i < specialCharacters.length; i++) {
      mainArray.push(specialCharacters[i])
    }
    console.log(finalPassword)
  }
  if (lower) {
    var random = Math.floor(Math.random()*lowerCasedCharacters.length);
    var randomCharacter = lowerCasedCharacters[random];
    finalPassword.push(randomCharacter)
    counter ++
    for (var i = 0; i < lowerCasedCharacters.length; i++) {
      mainArray.push(lowerCasedCharacters[i])
    }
    console.log(finalPassword)
  }
  if (number) {
    var random = Math.floor(Math.random()*numericCharacters.length);
    var randomCharacter = numericCharacters[random];
    finalPassword.push(randomCharacter);
    counter ++
    for (var i = 0; i < numericCharacters.length; i++) {
      mainArray.push(numericCharacters[i])
    }
    console.log(finalPassword);
  }
  if (upper) {
    var random = Math.floor(Math.random()*upperCasedCharacters.length);
    var randomCharacter = upperCasedCharacters[random];
    finalPassword.push(randomCharacter);
    counter ++
    for (var i = 0; i < upperCasedCharacters.length; i++) {
      mainArray.push(upperCasedCharacters[i])
    }
    console.log(finalPassword);
  }
  console.log(mainArray)
for (var i = 0; i < userLength - counter; i++) {
  var random = Math.floor(Math.random()*mainArray.length);
  finalPassword.push(mainArray[random])
}
return finalPassword.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
