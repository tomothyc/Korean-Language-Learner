import React, { useCallback, useState, useEffect } from "react";
import UserService from "../services/user.service";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import getLetters from "../services/hangul.service";
import keyboard from "../keyboard.png"



// keyboardBtn.addEventListener('click', () => {
//   keyboardImg.classList.toggle('show-keyboard');
// });

// const words = vocab;
// const DEFAULT_TIME = 30;

// let time = DEFAULT_TIME;
// let score;
// let isGameOver;
// let interval;

// 
// function setupInput() {
//   wordInput.value = '';
//   wordInput.removeAttribute('disabled');
//   wordInput.focus();
//   wordInput.setAttribute('placeholder', '');
//   wordInput.addEventListener('keypress', function (e) {
//     if (e.key === 'Enter') {
//       matchInput();
//     }
//   });
// }

// function showWord(words) {
//   const randIndex = Math.floor(Math.random() * words.length);
//   currentWord.innerText = words[randIndex].kr;
//   translation.innerText = words[randIndex].en;

//   time = DEFAULT_TIME + 1;
// }

// function matchInput() {
//   if (wordInput.value === currentWord.innerText) {
//     score++;
//     message.innerText = 'You got it!';

//     showWord(words);
//     wordInput.value = '';
//   } else {
//     message.innerText = '';
//   }

//   scoreDisplay.innerText = score;
// }

// function countdown() {
//   if (time > 0) {
//     time--;
//   } else if (time <= 0) {
//     isGameOver = true;
//     gameOver();
//   }
//   timeDisplay.innerText = time;
// }

// function gameOver() {
//   if (isGameOver && time === 0) {
//     message.innerText = 'Game Over!';
//     message.classList.add('game-over');
//     wordInput.setAttribute('disabled', '');
//     wordInput.setAttribute('placeholder', '');
//     startBtn.removeAttribute('disabled');
//     startBtn.style.backgroundColor = '#779ecb';
//     startBtn.innerText = 'Play Again!';
//   }
// }

// startBtn.addEventListener('click', start);
const BoardUser = () => {


// const wordInput = document.querySelector('#wordInput');
// const currentWord = document.querySelector('#currentWord');
// const translation = document.querySelector('#translation');
// const scoreDisplay = document.querySelector('#score');
// const timeDisplay = document.querySelector('#time');
// const message = document.querySelector('#message');
// const seconds = document.querySelector('#seconds');
// const startBtn = document.querySelector('#startBtn');

// const keyboard = document.querySelector('.keyboard');
// const keyboardImg = document.querySelector('.keyboard img');
// const keyboardBtn = document.querySelector('.btn-keyboard');
// const keyboardSpan = document.querySelector('.btn-keyboard span');

const [time, setTime] = useState(30);
const [score, setScore] = useState(0);
const [isGameOver, setIsGameOver] = useState(false)
const [interval, setInterval] = useState("")
const [started, setStarted] = useState(false)

const [content, setContent] = useState("");
const [letters, setLetters] = useState([]);


const handleStart = () => {
  started ? setStarted(false) : setStarted(true)
    // currentWord.classList.remove('initial-font');
    // isGameOver = false;
    // message.innerText = '';
    // message.classList.remove('game-over');
    // showWord(words);
    // score = 0;
    // scoreDisplay.innerText = score;
  
    // clearInterval(interval);
    // if (!isGameOver) interval = setInterval(countdown, 1000);
  
    // setupInput();
    // startBtn.innerText = '';
    // startBtn.style.backgroundColor = '#232323';
    // startBtn.setAttribute('disabled', '');
  }
  

  useEffect(() => {
  getLetters.getLetters().then(rsp=>{
    setLetters(rsp.json());
    })
    
    console.log(letters)
    UserService.getUserBoard().then(
      response => {
        setContent(response.data);
      },
      error => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  // const addLetters = english => {
  //   return axios
  //     .get("http://localhost:8080/api/hangul/letters", {})
  //     .then(response => {
  //       const allLetters = response.data.createdLetters;
  //       setLetters(allLetters);
  //     })
  //     .catch(error => console.log(`Error: ${error}`));
  // };

  return (
    <main class="container">
      <section class="word">
        {
          started ?
          (<div>WORD</div>) : (<h2 class="word_current" id="currentWord">Korean Typing</h2>) 
        }
        
        <p class="word_translation" id="translation"></p>

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
        <h3 class="controls_time">Time Left: <span class="time" id="time">0</span></h3>
        <h3 class="controls_score">Score: <span class="score" id="score">0</span></h3>

        {started ? (<div></div>) : (<button onClick ={handleStart} class="btn-start" id="startBtn">START</button>) }

      </section>

      <section class="kb">
        <figure class="keyboard">
          <img class="keyboard_img" src={keyboard} alt="Korean Keyboard" />
        </figure>
        <button class="btn-keyboard"> ⌨ </button>
      </section>
    </main>
  );
};

export default BoardUser;
