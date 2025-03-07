const randomNum=parseInt(Math.random()*100+1);

const submit=document.querySelector('#submit');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.result');

const p=document.createElement('p');

let prevGuesses=[];
let numberOfGuess=1;
let playGame=true;
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        let guess=parseInt(userInput.value);
        isValidGuess(guess);
    });
}

function isValidGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number');
    }else if(guess<1||guess>100){
        alert('Please enter a number from  1 to 100');
    }else{
        prevGuesses.push(guess);
        if(numberOfGuess==11){
            displayGuess(guess);
            displayMessage(`GAME OVER! Random number was ${randomNum}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess==randomNum){
        displayMessage('You guessed it right!');
    }else if(guess>randomNum){
        displayMessage('Your guess is higher than the number')
    }else{
        displayMessage('Your guess is lower than the number')
    }
}
function displayGuess(guess){//cleanup method
    userInput.value='';
    guessSlot.innerHTML+=`${guess} `
    numberOfGuess++;
    remaining.innerHTML=`${11-numberOfGuess}`
}
function displayMessage(msg){
    lowOrHi.innerHTML=`${msg}`
}
function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p);
    playGame=false;
    newGame()
}
function newGame(){
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNum=parseInt(Math.random()*100+1);
        prevGuesses=[];
        numberOfGuess=1;
        
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numberOfGuess}`
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame=true;
    })
}
