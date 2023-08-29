let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random()*100);
console.log(randomNumber)
function checkGuess() {
    let gussingNumber =parseInt(userInput.value);
    if (gussingNumber > randomNumber){
        gameResult.textContent="Too high, Try again.";
        gameResult.style.backgroundColor="#00BBFF";
        userInput.style.backgroundColor="#ED051C";
    }
    else if ( gussingNumber < randomNumber){
        gameResult.textContent="Too low, Try again.";
        gameResult.style.backgroundColor="#4BEBE8";
        userInput.style.backgroundColor="#ED051C";
    }
    else if ( gussingNumber === randomNumber) {
        gameResult.textContent="congratulations You Got it..!";
        gameResult.style.backgroundColor="#02EB21";
        userInput.style.backgroundColor="#00FC87";
    }
    else{
        gameResult.textContent="Proved a valid input.";
        gameResult.style.backgroundColor="#f71000";
        userInput.style.backgroundColor="#f71000";
    }
}