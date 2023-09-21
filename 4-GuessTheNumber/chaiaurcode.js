const form = document.querySelector('form');

const Numb = Math.floor(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const result = document.querySelector('#lastResult');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lowOrHigh = document.querySelector('#lowOrHigh');
const paras = document.querySelector('#resultParas');

const p = document.createElement('p');

const prev = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {}

function checkGuess(guess) {}

function displayMessage(guess) {}
