//for pasword generation
const passwordRange = document.querySelector('#password-range');
const passwordRangeNumber = document.querySelector('#password-range-number');
const form = document.querySelector('#form-password')
const getUppercase = document.querySelector('#check-uppercase');
const getNumber = document.querySelector('#check-number');
const getSymbol = document.querySelector('#check-symbol');
let displayPassword = document.querySelector('#display')

const UPPERCASECHARACTER = arrayLowToHigh(65,90);
const LOWERCASECHARACTER = arrayLowToHigh(97,122);
const NUMBERCHARACTER = arrayLowToHigh(48,57);
const SYMBOLCHARACTER = arrayLowToHigh(33,47).concat(arrayLowToHigh(58,64)).concat(arrayLowToHigh(91,96));

//password generator event listener
passwordRangeNumber.addEventListener('input', rangeNumbers);
passwordRange.addEventListener('input', rangeNumbers);
form.addEventListener('submit', formSubmit);


function rangeNumbers(e){
   const sameValue = e.target.value;
   console.log(e.target);
   passwordRange.value =sameValue;
   passwordRangeNumber.value =sameValue;

}

function formSubmit(e){
    e.preventDefault();
     const characterPasword = passwordRangeNumber.value;
     const Uppercase = getUppercase.checked;
     const Numbercase = getNumber.checked;
     const Symbol = getSymbol.checked;
    const password = generatePassword(characterPasword, Uppercase, Numbercase, Symbol)
    displayPassword.innerHTML = password;
}

function generatePassword(characterPasword, Uppercase, Numbercase, Symbol) {
    let passwordCharacter = LOWERCASECHARACTER;
    console.log(passwordCharacter)
    if(Uppercase) passwordCharacter = passwordCharacter.concat(UPPERCASECHARACTER);
    if(Numbercase) passwordCharacter = passwordCharacter.concat(NUMBERCHARACTER);
    if(Symbol) passwordCharacter = passwordCharacter.concat(SYMBOLCHARACTER);
    let completPasswordCharacter = []
    for(let i = 0; i < characterPasword; i += 1){
      let character = passwordCharacter[Math.floor(Math.random()* passwordCharacter.length)];
      completPasswordCharacter.push(String.fromCharCode(character));
      console.log(character)
     
    }

    return completPasswordCharacter.join('')

}


function arrayLowToHigh(low, high) {
    let array = []
    for(let i = low; i <= high; i += 1){
        array.push(i)
    }
    return array
}
