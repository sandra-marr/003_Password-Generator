// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// goal- click generate password > prompt asks for input on 1. length between 8 and 128 characters. 2. character types (upper, lower, numeric, special), then a password is generated

function generatePassword(numberCharacters, upperCase, lowerCase, number, specialCharacters) {

// define variables for each type of character

//select the number of characters. This needs to repeat if the user provides the wrong input (i.e. they input  3 or 140). If the user hits cancel, this should not repeat. It should start the process over. 
  while (true) {
    var numberCharacters = prompt("Please select the number of characters for your password. This should be between 8 and 128.", 8);
    
    if (numberCharacters >= 8 && numberCharacters <= 128) {
      break; 
    } 
    
    if(numberCharacters = "null"){
      alert("You have now stopped the generate password tool. To try again, click \"Generate Password\".")
      return passwordText.value;
    } 
    alert("That number is outside of the range. Please pick again.");
  }   
  alert("You have chosen to use " + numberCharacters + " characters for your password.");
  
  console.log(numberCharacters);
  
//Use uppercase? 
  var upperCase = confirm("If you would like to use uppercase letters in your password, please select okay.")

  if (upperCase){
    alert("Your password will contain uppercase letters.");
  }

  if (!upperCase){
  alert("Your password will not contain uppercase letters.");
  }

// Lowercase?
  var lowerCase = confirm("If you would like to use lowercase characters in your password, please select okay.")

  if (lowerCase){
    alert("Your password will contain lowercase letters.");
  }

  if (!lowerCase){
  alert("Your password will not contain lowercase letters.");
  }

// Number?
  var number = confirm("If you would like to use numbers in your password, please select okay.")
  
  if (number){
    alert("Your password will contain numbers.");
  }

  if (!number){
  alert("Your password will not contain numbers.");
  }

// Special characters?
  var specialCharacters = confirm("If you would like to use special characters in your password, please select okay.")

  if (specialCharacters){
    alert("Your password will contain special characters.");
  }
  
  if (!specialCharacters){
  alert("Your password will not contain special characters.");
  }

//develop baseline values to use per the inputs. The values are from ASCII character codes.

  function generateValueArrays (x, y) {
    var array = []
    for(i=x; i<=y; i++) {
      array.push(i);
    }
    return array;
  }

  var upperCaseValues = (generateValueArrays(65,90));
  console.log(upperCaseValues);

  var lowerCaseValues = (generateValueArrays(97,122));
  console.log(lowerCaseValues);

  var numberValues = (generateValueArrays(48,57));
  console.log(numberValues);

  var specialCharacterValues = generateValueArrays(33,47).concat(generateValueArrays(58,64)).concat(generateValueArrays(91,96)).concat(generateValueArrays(123,126));
  console.log(specialCharacterValues);
  
//develop the full list of characters/values that will be used to select the password.
  var allCharacters = [];
  if(upperCase){
    allCharacters = upperCaseValues;
  }
  if(lowerCase) {
    allCharacters = allCharacters.concat(lowerCaseValues);
  }
  if(number) {
    allCharacters = allCharacters.concat(numberValues);
  }
  if(specialCharacters) {
    allCharacters = allCharacters.concat(specialCharacterValues);
  }
  console.log(allCharacters);

 
//create an array with the criteria above using a for loop. Each element in the array will need to be randomly generated and pushed into the array. The random numbers need to be integers. The max index value that can be returned is 93 since the allCharater.length is 94.

  var passwordText = [];
  for (i = 0; i < numberCharacters; i++) {
    var value = allCharacters[Math.floor(Math.random() * allCharacters.length)];
    passwordText.push(String.fromCharCode(value));
  }
  console.log(passwordText);
  console.log(allCharacters.length);

  return passwordText.join('');

}

  
