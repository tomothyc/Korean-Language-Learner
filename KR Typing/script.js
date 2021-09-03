const wordInput = document.querySelector('#wordInput');
const currentWord = document.querySelector('#currentWord');
const translation = document.querySelector('#translation');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const startBtn = document.querySelector('#startBtn');

const keyboard = document.querySelector('.keyboard');
const keyboardImg = document.querySelector('.keyboard img');
const keyboardBtn = document.querySelector('.btn-keyboard');
const keyboardSpan = document.querySelector('.btn-keyboard span');

keyboardBtn.addEventListener('click', () => {
  keyboardImg.classList.toggle('show-keyboard');
});

const words = vocab;
const DEFAULT_TIME = 30;

let time = DEFAULT_TIME;
let score;
let isGameOver;
let interval;

function start() {
  currentWord.classList.remove('initial-font');
  isGameOver = false;
  message.innerText = '';
  message.classList.remove('game-over');
  showWord(words);
  score = 0;
  scoreDisplay.innerText = score;

  clearInterval(interval);
  if (!isGameOver) interval = setInterval(countdown, 1000);

  setupInput();
  startBtn.innerText = '';
  startBtn.style.backgroundColor = '#232323';
  startBtn.setAttribute('disabled', '');
}

function setupInput() {
  wordInput.value = '';
  wordInput.removeAttribute('disabled');
  wordInput.focus();
  wordInput.setAttribute('placeholder', '');
  wordInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      matchInput();
    }
  });
}

function showWord(words) {
  const randIndex = Math.floor(Math.random() * words.length);
  currentWord.innerText = words[randIndex].kr;
  translation.innerText = words[randIndex].en;

  time = DEFAULT_TIME + 1;
}

function matchInput() {
  if (wordInput.value === currentWord.innerText) {
    score++;
    message.innerText = 'You got it!';

    showWord(words);
    wordInput.value = '';
  } else {
    message.innerText = '';
  }

  scoreDisplay.innerText = score;
}

function countdown() {
  if (time > 0) {
    time--;
  } else if (time <= 0) {
    isGameOver = true;
    gameOver();
  }
  timeDisplay.innerText = time;
}

function gameOver() {
  if (isGameOver && time === 0) {
    message.innerText = 'Game Over!';
    message.classList.add('game-over');
    wordInput.setAttribute('disabled', '');
    wordInput.setAttribute('placeholder', '');
    startBtn.removeAttribute('disabled');
    startBtn.style.backgroundColor = '#779ecb';
    startBtn.innerText = 'Play Again!';
  }
}

startBtn.addEventListener('click', start);
