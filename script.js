// Assignment Code
const generateBtn = document.querySelector("#generate");
//this is the function that will run once the event is triggered
function generatePassword() {


  // ask how many caracters the password should be

  //inclue the following parameteres;
  //uppercase
  //lowercase
  //numbers
  //special symbols

  //generate password based on criterias selected and length
  
  //1. create the character set based on criterias
  //2. loop for 'length' times, each iteration grab a random char and append to an accumulator
  //3. 

  //bank of characters
  //abcde....ABCDE....1234....

  //length
  //loop


  //password is a set off random characters



  // return the password

}

// Write password to the #password input
function writePassword(event) {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// when we click on generateBtn, then we will execute writePassword
generateBtn.addEventListener("click", writePassword);
