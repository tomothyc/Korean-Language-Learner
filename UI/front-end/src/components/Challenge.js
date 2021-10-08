import React, { useCallback, useState, useEffect } from "react";
import UserService from "../services/user.service";
import { Link, Switch, Route } from "react-router-dom";
import axios from "axios";
import server from "../services/hangul.service";
import keyboard from "../keyboard.png";

const Challenge = () => {
  const [content, setContent] = useState("");
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    server.getLetters().then((rsp) => {
      console.log(rsp);
      setLetters(rsp);
    });

    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
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
        <h2 class="word_current" id="currentWord">
          Korean Typing
        </h2>
        <p class="word_translation" id="translation">
          <div className="letter-cards">
            {/* {letters.map(letter => {
              return (
                <div className="letter-card">
                  <p>{letter.kr}</p>
                </div>
              );
            })} */}
          </div>
        </p>

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
        <h3 class="controls_time">
          Time Left:{" "}
          <span class="time" id="time">
            0
          </span>
        </h3>
        <h3 class="controls_score">
          Score:{" "}
          <span class="score" id="score">
            0
          </span>
        </h3>

        <button class="btn-start" id="startBtn">
          START
        </button>
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

export default Challenge;
