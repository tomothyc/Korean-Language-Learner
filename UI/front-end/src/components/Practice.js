import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import server from "../services/hangul.service";

import keyImg from "../static/img/keyboard.png";

const Practice = () => {

const wordInput = document.querySelector('#wordInput');
const currentWord = document.querySelector('#currentWord');
const translation = document.querySelector('#translation');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const startBtn = document.querySelector('#startBtn');

const keyboard = document.querySelector('.keyboard');
const keyboardBtn = document.querySelector('.btn-keyboard');
const keyboardSpan = document.querySelector('.btn-keyboard span');

keyboardBtn.addEventListener('click', () => {
  keyboardImg.classList.toggle('show-keyboard');
});

// const words = vocab;

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




  return (
  <div >
    <main class="container">
      <section class="word">
        <h2 class="word_current" id="currentWord">Korean Typing</h2>
        <p class="word_translation" id="translation">Practice!</p>

        <input
          type="text"
          class="word_input"
          id="wordInput"
          placeholder=""
          disabled
        />
        <p class="message" id="message"></p>
      </section>

      <section class="controls">

        <button class="btn-start" id="startBtn">START</button>
      </section>

      <section class="kb">
        <figure class="keyboard">
          <img src={keyImg} alt="Korean Keyboard"/>
  
        </figure>
        <button class="btn-keyboard"> ⌨ </button>
      </section>
    </main>

  </div>
  );
};

export default Practice;
