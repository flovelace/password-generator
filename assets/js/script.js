// variable to grab password generate button

var generateBtn = document.querySelector("#generate");
 // add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

// variables that hold the strings with possible characters (removed some spec chars that may causes issues with JS)

var upperAlpha ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerAlpha = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var specChar = "!#$%&*+,-.:;<=>?@[]^_{}~"

// variable to pick a random character from vars
var randomChar = function(str) {
  var index = Math.floor(Math.random() * str.length);
  return str[index];
}

// var to pick a random integar
var randomInt = function(num) {
  return Math.floor(Math.random() * num);

}

// ask the user how long they want their password to be
var userActionLength = function () {
  var passwordLength = parseInt(window.prompt("How many characters would you like your password to have? Please select a number between 8 and 128.")) //parse string to get integar value
  // to control the user behaviour here to make sure they choose a valid length
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) { // user can't choose less than 8, more than 128 or leave blank
    window.alert("Please select a valid number between 8 and 128!");
    userActionLength(); // send the user back into the loop to start again
  }
  else {
    return passwordLength;
  }

}

// alerts to ask the user to choose which character types they want in the password
var userAction = function() {
  var userPassword = []; // empty to hold the push on user selection
  if (window.confirm("Would you like uppercase letters in your password?")) {
      userPassword.push(upperAlpha);
    }
    if (window.confirm("Would you like lowercase letters in your password?")) {
      userPassword.push(lowerAlpha);
    }
    if (window.confirm("Would you like numbers in your password?")) {
      userPassword.push(num);
    }
    if (window.confirm("Would like special characters in your password? Eg. !, @ or $?")) {
      userPassword.push(specChar);
    }
    // to control user behaviour, we need to make sure they can't progress if they don't select at least one character type!
    if (userPassword.length === 0) {
      window.alert("Please select at least one type of character for your password!");
      // send the user back into the loop to start again
      userAction();
    }
    else {
      return userPassword; // holding the password choices from user now
    }
}

// include a random character from each user choice
var addRandomChar = function(PasswordData, array) {
  var passwordIndex = [];
  for (var i = 0; i < PasswordData.length; i++) {
    passwordIndex.push(i);
  }

  var randomIndex = randomInt(passwordIndex.length);
  var randomValue = passwordIndex[randomIndex];

  for (var i = 0; i < array.length; i++) {
    PasswordData[randomValue] = randomChar(array[i]);
    passwordIndex.splice(randomIndex, 1);
    randomIndex = randomInt(passwordIndex.length);
    randomValue = passwordIndex[randomIndex];
  }

  return PasswordData;
}

// generate password function
var generatePassword = function() {
  var pwLength = userActionLength();
  var charArray = userAction();
  var password = "";
  var passwordArray = [];

  // append a random character from a random list until password length achieved
  for (var i = 0; i < pwLength; i++) {
    charSet = charArray[randomInt(charArray.length)];
    usercharsSet = randomChar(charSet);
    passwordArray.push(usercharsSet);
  }

  passwordArray = addRandomChar(passwordArray, charArray);

  for (var i = 0; i < pwLength; i++) {
    password = password.concat(passwordArray[i]);
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordOutput = document.querySelector("#password");

  passwordOutput.value = password;

}


