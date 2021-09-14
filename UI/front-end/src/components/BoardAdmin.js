import React, { useCallback, useState, useEffect } from "react";
import UserService from "../services/user.service";
import getLetters from "../services/hangul.service";
import axios from "axios";
import { useDispatch } from "react-redux";

const AdminUser = () => {
  const [content, setContent] = useState("");
  const [letters, setLetters] = useState([]);
  const [letter, setLetter] = useState("");

  const dispatch = useDispatch();

  const onChangeLetter = e => {
    const letter = e.target.value;
    setLetter(letter);
  };

  useEffect(() => {
    // getLetters().then(response => {
    //   setLetters(response);
    // });
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
  const addNewLetter = e => {
    e.preventDefault();
    // dispatch(addLetter(letter))
  };
  return (
    <div className="container">
      <h1 className="container-title">Admin</h1>
      <form class="form" onSubmit={addNewLetter}>
        <h3>Add New Letter</h3>
        <input
          type="text"
          className="form-control"
          name="letter"
          value={letter}
          onChange={onChangeLetter}
        />
        <button className="btn btn-primary btn-block">
          <span>Add Letter</span>
        </button>
      </form>
      <div class="letters-container">
        <div className="letters-title">
          <h3>Letters</h3>
        </div>
        <div className="letter-cards">
          {letters.map(letter => {
            return (
              <div className="letter-card">
                <p>{letter.english}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
