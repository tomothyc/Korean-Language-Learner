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

let time;
let score;
let isGameOver;
let interval;
let spm;

startBtn.addEventListener("click", start);

function start() {
  time = 0;
  timeDisplay.innerText = time;
  currentWord.classList.remove('initial-font');
  isGameOver = false;
  message.innerText = '';
  message.classList.remove('game-over');
  showWord(words);
  score = 0;
  scoreDisplay.innerText = score;

  clearInterval(interval);
  if (!isGameOver) interval = setInterval(countup, 1000);

  setupInput();
  startBtn.removeEventListener("click", start);
  startBtn.addEventListener("click", stop);
  startBtn.innerText = "STOP";
  startBtn.value = "stop";
}

function stop() {
  spm = Math.round((score / (time / 60)) * 100) / 100;
  if (isNaN(spm)) {
    spm = 0;
  }
  isGameOver = true;
  startBtn.removeEventListener("click", stop);
  startBtn.addEventListener("click", start);
  startBtn.innerText = "START";
  startBtn.value = "start";

  message.innerText = 'Game Over! \n Score per Minute: ' + spm;
  message.classList.add('game-over');
  wordInput.setAttribute('disabled', '');
  wordInput.setAttribute('placeholder', '');
  currentWord.innerText = "Korean Typing";
  translation.innerText = "Challenge!";
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

function countup() {
  if (!isGameOver) {
    time++;
  } else if (isGameOver) {
    return;
  }
  timeDisplay.innerText = time;
}
