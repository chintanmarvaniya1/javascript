let randomNumber = parseInt(Math.random()*100)+1;
console.log(randomNumber);

const submitBtn = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const previousGuessList = document.querySelector('.guesses');
const remainingChance = document.querySelector('.lastResult');
const resultText = document.querySelector('.lowOrHi');
const results = document.querySelector('.resultParas');

const newPera = document.createElement('p')

let noGuesses = 1;
let playGame =true;
let previousGuess = [];

if (playGame) {
    submitBtn.addEventListener('click',(event)=>{
        event.preventDefault();
        const userText = parseInt(userInput.value);
        validateNumber(userText)
    });
}

function validateNumber(userInput) {
    if (isNaN(userInput)) {
        alert('PLease enter a valid number');
    }else if(userInput<1){
        alert('PLease enter a number more than 1');
    }else if(userInput >100){
        alert('PLease enter a number less than 100');
    }else{
        previousGuess.push(userInput)
        if(noGuesses === 10){
            displayResult(userInput);
            displayMessage(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }else{
            displayResult(userInput);
            checktheValue(userInput);
        }
    }
}

function checktheValue(userInput){
    if (userInput === randomNumber) {
        displayMessage('You guessed it right');
        endGame();
    }else if(userInput < randomNumber){
        displayMessage('Number is to LOW');
    }else if(userInput > randomNumber){
        displayMessage('Number is to HIGH');
    }
}

function displayMessage(string){
    resultText.innerHTML = `<h2>${string}</h>`
}


function displayResult(userInput){
    userInput.value = '';
    previousGuessList.innerHTML += `${userInput} `;
    noGuesses++;
    remainingChance.innerHTML = `${11 - noGuesses}`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled','');
    submitBtn.setAttribute('disabled','');
    newPera.classList.add('button');
    newPera.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    results.appendChild(newPera);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameText = document.querySelector('#newGame');
    newGameText.addEventListener('click',(event)=>{
        randomNumber = parseInt(Math.random() * 100 + 1);
        noGuesses = 1;
        previousGuess = [];
        previousGuessList.innerHTML = '';
        remainingChance.innerHTML = `${11 - noGuesses}`;
        userInput.removeAttribute('disabled','');
        submitBtn.removeAttribute('disabled','');
        results.removeChild(newPera);
        playGame = true;
    });
}
