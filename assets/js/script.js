//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
//  var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

var generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", () => {
  var passwordLength = 16;
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_";
  var password = "";

  for (i = 0;i < passwordLength;i++){
      password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)));
  }

  document.getElementById("password").value = password;
});