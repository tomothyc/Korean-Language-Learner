const wordInput = document.querySelector('#wordInput');
const currentWord = document.querySelector('#currentWord');
const translation = document.querySelector('#translation');
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

let isGameOver;
let interval;
let spm;

startBtn.addEventListener("click", start);

function start() {
  currentWord.classList.remove('initial-font');
  isGameOver = false;
  message.innerText = '';
  message.classList.remove('game-over');
  showWord(words);

  setupInput();
  startBtn.removeEventListener("click", start);
  startBtn.addEventListener("click", stop);
  startBtn.innerText = "STOP";
  startBtn.value = "stop";
}

function stop() {
  isGameOver = true;
  startBtn.removeEventListener("click", stop);
  startBtn.addEventListener("click", start);
  startBtn.innerText = "START";
  startBtn.value = "start";

  message.innerText = 'Game Over!';
  message.classList.add('game-over');
  wordInput.setAttribute('disabled', '');
  wordInput.setAttribute('placeholder', '');
  currentWord.innerText = "Korean Typing";
  translation.innerText = "Practice!";
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
    message.innerText = 'You got it!';

    showWord(words);
    wordInput.value = '';
  } else {
    message.innerText = '';
  }

}
