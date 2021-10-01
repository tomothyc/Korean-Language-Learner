import React, { useState, useRef, useEffect } from "react";
import server from "../services/hangul.service";
import { useDispatch, useSelector } from "react-redux";
import { addVocab } from "../actions/hangul";
import { faTimes, faPlus, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminUser = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [successfulGet, setSuccessfulGet] = useState(false);
  const [step, setStep] = useState("letters");
  const [exercise, setExercise] = useState("Lhand");
  const [vocab, setVocab] = useState([]);
  const [hangul, setHangul] = useState("");
  const [letter, setLetter] = useState("");
  const [
    addContent,
    setAddContent
  ] = useState(`<div onClick={handleClick} class="vocab-add-container">
  <h3 className="add-title">Add New Vocab</h3>
  <FontAwesomeIcon className="plus-icon" icon={faPlus} />
</div>`);
  const [successful, setSuccessful] = useState(false);
  const [addClicked, setAddClicked] = useState(false);
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeHangul = e => {
    const hangul = e.target.value;
    setHangul(hangul);
  };
  const onChangeLetter = e => {
    const letter = e.target.value;
    setLetter(letter);
  };

  const onChangeStep = e => {
    const step = e.target.value;
    console.log(step);
    setStep(step);
  };

  const onChangeExercise = e => {
    const exercise = e.target.value;
    setExercise(exercise);
  };

  const handleSelection = e => {
    e.preventDefault();
    server.getLetters(step, exercise).then(rsp => {
      setVocab(rsp.vocab);
      setSuccessfulGet(true);
      console.log(successfulGet);
    });
  };

  const returnExercise = step => {
    switch (step) {
      default:
        return;
      case "letters":
        return (
          <select
            class="exercise"
            id="lettersexercise"
            onChange={onChangeExercise}
          >
            <option value="Lhand">Basic left hand</option>
            <option value="Rhand">Basic right hand</option>
            <option value="Bhand">Left and right hand</option>
            <option value="SLhand">Shift left hand</option>
            <option value="SRhand">Shift right hand</option>
            <option value="Allletters">All Letters</option>
          </select>
        );
      case "syllables":
        return (
          <select class="exercise" id="syllablesexercise">
            <option value="CV">Consonant + Vowel</option>
            <option value="SCV">Shift C + V</option>
            <option value="CVC">C + V + C</option>
            <option value="SCVC">shift C + V + C </option>
            <option value="CVCC">C + v + CC</option>
          </select>
        );
      case "words":
        return (
          <select class="exercise" id="wordsexercise">
            <option value="2syl">2 syllables without ending consonant</option>
            <option value="3syl">3 syllables without ending consonant</option>
            <option value="2sylC">2 syllables with ending consonant</option>
            <option value="3sylC">3 syllables without ending consonant</option>
            <option value="4syl">Longer than 3 syllables</option>
          </select>
        );
      case "shortsent":
        return (
          <select class="exercise" id="shortsentencesexercise">
            <option value="shortsent">Short sentences</option>
          </select>
        );
      case "longsent":
        return (
          <select class="exercise" id="longsentencesexercise">
            <option value="default">-</option>
            <option value="longsent">Long sentences</option>
          </select>
        );
      case "dictation":
        return (
          <select class="exercise" id="dictationexercise">
            <option value="default">-</option>
            <option value="wdictation">Word dictation</option>
            <option value="sdictation">Short sentence dictation</option>
            <option value="ldictation">Long sentence dictation</option>
          </select>
        );
    }
  };

  const handleRegister = e => {
    e.preventDefault();
    console.log(step, exercise, letter, hangul);
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(addVocab(step, exercise, letter, hangul))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  const handleClick = () => {
    addClicked ? setAddClicked(false) : setAddClicked(true);
  };

  const add = () => {
    if (addClicked) {
      return (
        <div className=" card-container">
          <form class="form" onSubmit={handleRegister} ref={form}>
            <div>
              <div className="form-group add-form-container">
                <div className="add-title">
                  <label htmlFor="username">
                    Add new letter to exercise: {exercise} in step: {step}
                  </label>
                  <div onClick={handleClick} className="hide-container">
                    <h3>Hide</h3>
                    <FontAwesomeIcon className="arrow-icon" icon={faArrowUp} />
                  </div>
                </div>
                <div className="add-container">
                  <div>
                    <label htmlFor="username">English</label>
                    <input
                      type="text"
                      className="form-control"
                      name="letter"
                      value={letter}
                      onChange={onChangeLetter}
                    />
                    <label htmlFor="username">Hangul</label>
                    <input
                      type="text"
                      className="form-control"
                      name="hangul"
                      value={hangul}
                      onChange={onChangeHangul}
                    />
                  </div>
                  <button className="get-button btn btn-primary btn-block">
                    Add Vocab
                  </button>
                </div>
              </div>
            </div>
            {message && (
              <div className="message form-group">
                <div
                  className={
                    successful ? "alert alert-success" : "alert alert-danger"
                  }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
          </form>
        </div>
      );
    } else {
      return (
        <div onClick={handleClick} class="vocab-add-container">
          <h3 className="add-title">Add New Vocab</h3>
          <FontAwesomeIcon className="plus-icon" icon={faPlus} />
        </div>
      );
    }
  };
  return (
    <div className="col-md-12">
      <form class="select-container container" onSubmit={handleSelection}>
        <label class="stepheader">Select Step:</label>
        <select defaultValue="letters" id="step" onChange={onChangeStep}>
          <option selected value="letters" id="letters">
            Letters
          </option>
          <option value="syllables" id="syllables">
            Syllables
          </option>
          <option value="words" id="words">
            Words
          </option>
          <option value="shortsent" id="shortsent">
            Short sentences
          </option>
          <option value="longsent" id="longsent">
            Long sentences
          </option>
          <option value="dictation" id="dictation">
            Dictation
          </option>
        </select>

        <label id="exercisespecific">Select exercise:</label>

        {returnExercise(step)}

        <button className="get-button btn btn-primary btn-block">
          Get Vocab
        </button>
      </form>
      {successfulGet && add()}
      <div class="letters-container">
        {successfulGet && (
          <div>
            <div className="letters-title">
              <h3>Current Letters</h3>
            </div>
            <div className="letter-cards">
              {vocab.map(letter => {
                return (
                  <div className="letter-card">
                    <button className="remove-button">
                      <FontAwesomeIcon className="cross-icon" icon={faTimes} />
                    </button>
                    <p>{letter.kr}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminUser;
