import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import server from "../services/hangul.service";
import keyboard from "../keyboard.png";
import Form from "react-validation/build/form";

const BoardUser = (props) => {
  const searchInput = useRef(null);
  const [vocabInput, setVocabInput] = useState("");
  const [vocab, setVocab] = useState([]);
  const [step, setStep] = useState([]);
  const [exercise, setExercise] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [score, setScore] = useState(0);
  const [showKeyBoard, setShowKeyBoard] = useState(false);
  const [vocabLength, setVocabLength] = useState(0);
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState("");
  const [correct, setCorrect] = useState(false);
  const [input, setInput] = useState("");
  const location = useLocation().pathname.split("/");

  useEffect(() => {
    let interval = null;
    if (gameStarted) {
      searchInput.current.focus();
      setIndex(Math.floor(Math.random() * vocabLength));
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 0.01);
      }, 10);
    } else if (!gameStarted) {
      clearInterval(interval);
    }

    setStep(location[2]);
    setExercise(location[3]);
    getVocab(step, exercise);
    return () => clearInterval(interval);
  }, [props, gameStarted]);

  const getVocab = (step, exercise) => {
    server.getVocab(step, exercise).then((rsp) => {
      setVocab(rsp.vocab);
      setVocabLength(rsp.vocab.length);
    });
  };

  const changeVocab = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newIndex = Math.floor(Math.random() * vocabLength);
    if (input == vocab[index].kr) {
      setIndex(newIndex);
      setCorrect(true);
      setMessage("Correct!");
      setInput("");
      setScore(score + 1);
    } else {
      setCorrect(false);
      setMessage("Incorrect!");
      setInput("");
    }
  };

  const startGame = () => {
    setGameStarted(true);
    setTime(0);
    setScore(0);
    setMessage("");
  };

  const stopGame = () => {
    setGameStarted(false);
    let spm = Math.round((score / (time / 60)) * 100) / 100;
    if (isNaN(spm)) {
      spm = 0;
    }
    setMessage("Game Over! \n Score per Minute: " + spm);
  };

  const handleKeyBoard = () => {
    showKeyBoard ? setShowKeyBoard(false) : setShowKeyBoard(true);
  };

  return (
    <main class="container">
      <section class="word">
        <div className="vocab-container">
          {gameStarted ? (
            <h2 class="word_current">{vocab[index].kr}</h2>
          ) : (
            <h2 class="vocab" id="currentWord">
              Korean Typing
            </h2>
          )}
          {gameStarted ? (
            <p>{vocab[index].en}</p>
          ) : (
            <p class="word_translation" id="translation">
              Challenge!
            </p>
          )}
        </div>
        <section class="controls">
          <h3 class="controls_time">
            Time: <span class="time">{time.toFixed(2)}</span>
          </h3>
          <h3 class="controls_score">
            Score:{" "}
            <span class="score" id="score">
              {score}
            </span>
          </h3>
        </section>

        {gameStarted && (
          <Form onSubmit={handleSubmit}>
            <input
              onChange={changeVocab}
              ref={searchInput}
              value={input}
              type="text"
              class="word_input"
              id="wordInput"
              placeholder=""
            />
          </Form>
        )}
        <p
          class={
            !gameStarted
              ? "incorrect-msg"
              : correct
              ? "correct-msg"
              : "incorrect-msg"
          }
        >
          {message}
        </p>
      </section>

      <section class="controls">
        {gameStarted ? (
          <button onClick={stopGame} class="btn-start" id="startBtn">
            STOP
          </button>
        ) : (
          <button onClick={startGame} class="btn-start" id="startBtn">
            START
          </button>
        )}
      </section>

      <section class="kb">
        <figure class="keyboard">
          {showKeyBoard && (
            <img class="keyboard_img" src={keyboard} alt="Korean Keyboard" />
          )}
        </figure>
        <button onClick={handleKeyBoard} class="btn-keyboard">
          {" "}
          ⌨{" "}
        </button>
      </section>
    </main>
  );
};

export default BoardUser;
