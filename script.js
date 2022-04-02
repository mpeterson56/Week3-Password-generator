// Assignment code here
//arrays of possible password number,symbols and letters
var alpha =[ "Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
var beta = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
 var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var symbols =[ "!","@","#","$","%","^","&","*","_","-","=","+","?",];
//picks a random character from the arrays above
var passLength = "";
var passSymbols=  symbols[Math.floor(Math.random(1) * symbols.length)] ;
var passNumbers= numbers[Math.floor(Math.random(1) * numbers.length)] ;
var passAlpha = alpha[Math.floor(Math.random(1) * alpha.length)];
var passBeta=  beta[Math.floor(Math.random(1) * beta.length)];
var passwordCharacters = ""
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//hi


// Write password to the #password input
function writePassword() {
//set password length
  var passLength = window.prompt("select password length between 8 and 128");

while (passLength <=7 || passLength >= 129){

window.alert("password must be between 8 and 128!") 
 var passLength = window.prompt("select password length between 8 and 128");
}
//pasword symbols yes/no
mySymbols= confirm ("Do you want your password to include symbols? Select 'ok' for yes");
//pasword numbers yes/no
 myNumbers= confirm("Do you want to include numbers in your password? Select 'ok' for yes");
//password uppercase yes/no
 myAlpha= confirm("Do you want upper case letters in your password? Select 'ok' for yes");
//password lowercase yes/no 
 myBeta= confirm("do you want lower case letters in your password? Select 'ok' for yes");



if (passSymbols){ 
  passwordCharacters = passSymbols.concat(passwordCharacters);console.log(passSymbols)
}
if (passNumbers){
  passwordCharacters= passNumbers.concat(passwordCharacters);console.log(passNumbers)
}
if (passAlpha){
  passwordCharacters= passAlpha.concat(passwordCharacters);console.log(passAlpha)
}
if (passBeta){
  passwordCharacters= passBeta.concat(passwordCharacters);console.log(passBeta)
}
var randomPassword = ""
      
for (var i = 0; i < passLength; i++) {
  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  console.log(randomPassword)
}
window.alert(randomPassword)
}



  var passwordText = document.querySelector("#password");

  passwordText.value = password;





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
