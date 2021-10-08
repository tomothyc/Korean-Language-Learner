import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserService from "../services/user.service";
import { clearMessage } from "../actions/message";

import img from "../static/img/hp2.jpg";

const Home = () => {
  const [content, setContent] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    console.log(currentUser);
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoggedIn(true);
    }

    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const loginPage = () => {
    let path = `./login`;
    history.push(path);
  };
  const regoPage = () => {
    let path = `./register`;
    history.push(path);
  };
  const instructions = () => {
    let path = `./instructions`;
    history.push(path);
  };

  return (
    <div class="bod">
      <div class="home_h">
        <p> Welcome to KrType! </p>
      </div>

      <p>
        {" "}
        This website is designed to help you improve your Korean typing skills.{" "}
        <br />
        Create an account or login to get started!
      </p>
      {!currentUser && (
        <div>
          <button
            className="get-button btn btn-primary btn-block"
            onClick={regoPage}
          >
            REGISTER HERE
          </button>
          <button
            className="get-button btn btn-primary btn-block"
            onClick={loginPage}
          >
            LOGIN
          </button>
        </div>
      )}

      <div class="im">
        <img src={img} width="100%" height="100%" />
      </div>
      <p>
        {" "}
        <br /> Work your way through all the different practice modes to work on
        your typing. <br />{" "}
      </p>
      <p>
        Feeling confident? Select Challenge Mode to test your accuracy and speed
        in a variety of typing exercises.
        <br />
        Use the leaderboard to compare your results against the best results
        from members of your class.
        <br />
      </p>
      <p>
        To use this application you will need to have a Korean keyboard
        installed on your computer. <br />
        Click here for instructions on how to set it up.
        <br />
      </p>
      <button
        className="get-button btn btn-primary btn-block"
        onClick={instructions}
      >
        INSTRUCTIONS
      </button>
    </div>
  );
};

export default Home;
