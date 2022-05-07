// Assignment Code
var generateBtn = document.querySelector("#generate");


var totalPwAmount = 8;
var hasUpperCase = false;
var hasNumbers = false;
var hasSymbols = false;
console.log("ori totalPwAmount",totalPwAmount);
console.log("ori hasUpperCase",hasUpperCase);
console.log("ori hasNumbers",hasUpperCase);
console.log("ori hasSymbols",hasUpperCase);

//apend the option in the select
var min = 8,
    max = 128,
    select = document.getElementById('numSelect');

for (var i = min; i<=max; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = i;
    select.appendChild(opt);
}

function getSelectData(){
  var selectValue = document.getElementById("numSelect");
  totalPwAmount = selectValue.value;
  console.log("new totalPwAmount",totalPwAmount);
}

// function checkLowercaseInput(){
//   var lowerCaseCheckbox = document.getElementById('lowerCase');
//   // Check if the element is selected/checked
//   if(lowerCaseCheckbox.checked) {
//     lowerCaseChecked = true;
//     console.log("new lowerCaseChecked",lowerCaseChecked);
//   }else{
//     lowerCaseChecked = false;
//     console.log("new lowerCaseChecked",lowerCaseChecked);
//   }
// }
  
// Check if the element is selected/checked
function checkUppercaseInput(){
  var upperCaseCheckbox = document.getElementById('upperCase');
  if(upperCaseCheckbox.checked) {
    hasUpperCase = true;
    console.log("new hasUpperCase",hasUpperCase);
  }else{
    hasUpperCase = false;
    console.log("new hasUpperCase",hasUpperCase);
  }
}
function checkNumberInput(){
  var numberCheckbox = document.getElementById('needNnumber');
  if(numberCheckbox.checked) {
    hasNumbers = true;
    console.log("new hasNumbers",hasNumbers);
  }else{
    hasNumbers = false;
    console.log("new hasNumbers",hasNumbers);
  }
}

function checkSymbolInput(){
  var symbolCheckbox = document.getElementById('needSymbols');
  if(symbolCheckbox.checked) {
    hasSymbols = true;
    console.log("new hasSymbols",hasSymbols);
  }else{
    hasSymbols = false;
    console.log("new hasSymbols",hasSymbols);
  }
}

//change select value to num

var lowerCaseCharaters="abcdefghijklmnopqrstuvwxyz";
var upperCaseCharaters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers="0123456789";
var symbols="!@#$%^&*()";


// Write password to the #password input
function writePassword() {
  var password = generatePassword(hasUpperCase, hasNumbers, hasSymbols);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword (hasUpperCase, hasNumbers, hasSymbols){
console.log(hasUpperCase, hasNumbers, hasSymbols);
    var chars = lowerCaseCharaters;
    // var newChars = lowerCaseCharaters;
    if (hasUpperCase) {
      chars = chars.concat(upperCaseCharaters);
    }
    if (hasNumbers) {
      chars = chars.concat(numbers);
    }
    if (hasSymbols) {
      chars = chars.concat(symbols);
    }
      console.log("newChars",chars);
    // return generatePassword2(newChars);
    var newTotalPawLength = parseInt(totalPwAmount)

    let password = "";
    for (let i = 0; i < newTotalPawLength; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
};



// function generatePassword2(chars){
//   console.log("chars");
//   var newTotalPawLength = parseInt(totalPwAmount)
//   console.log("newTotalPawLength",newTotalPawLength);

//   console.log("generatePassword2",newTotalPawLength, chars);
//     let password = "";
//     // let chars2=chars.toString();
//     console.log("length",newTotalPawLength);
//     // console.log("chars",chars2);
//     for (let i = 0; i < newTotalPawLength; i++) {
//         password += chars.charAt(Math.floor(Math.random() * chars.length));
//     }
//     return password;
// };


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function copyPassword() {
  //Get the text field 
  var copyText = document.getElementById("password");

  //Select the text field 
  copyText.select();
  copyText.setSelectionRange(0, 999);
  //Copy the text inside the text field
  // navigator.clipboard.writeText(copyText.value);
  document.execCommand("copy"); 

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}
