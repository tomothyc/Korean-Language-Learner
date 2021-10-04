import React, { useState, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import UserService from "../services/user.service";


import img from '../static/img/hp2.jpg'; 

const Home = () => {
  const [content, setContent] = useState("");

    
  const history = useHistory();
 
  const loginPage = () =>{ 
    let path = `./Login.js`; 
    history.push(path);
  }
  const regoPage = () =>{ 
    let path = `./Register.js`; 
    history.push(path);
  }
  const instPage = () =>{ 
    let path = `./Instructions.js`; 
    history.push(path);
  }
  
  const css = `
    .header {
      color: #779ecb;
      font-size: xx-large;
      font-weight: bolder;
      text-decoration: underline;
    }

    .bod {
      text-align: center;
      margin-bottom: 20px;
    }

    .im {
      padding: 20px;
    }

    .l {
      list-style-type:none;
    }
  `

  return (
    <div class="bod">

      <div class="header">
        <style>{css}</style>
        <p> Welcome to KrType! </p>
      </div>
      
      <p> This website is designed to help you improve your Korean typing skills. <br />
        Create an account or login to get started! 
      </p>
      <div className="form-group"></div>
        <button className="get-button btn btn-primary btn-block" onClick={regoPage}>
        REGISTER HERE
        </button>
        <button className="get-button btn btn-primary btn-block" onClick={loginPage}>
        LOGIN
        </button>

        <div class="im">
        <img src={img} width="100%" height="100%" />
      </div>
      <p> <br /> Work your way through all the different practice modes to work on your typing. <br/> </p>
            {/* <ul class="l">
                <li>Letter Typing </li>
                <li>Syllable Typing </li>                
                <li>Word Typing </li>
                <li>Sentence Typing </li>
                <li>Dictation </li>
            </ul> */}
      <p>
            Feeling confident? Select Challenge Mode to test your accuracy and speed in a variety of typing exercises.<br/>
            Use the leaderboard to compare your results against the best results from members of your class.<br/>
      </p>
      <p>
            To use this application you will need to have a Korean keyboard installed on your computer. <br/>
            Click here for instructions on how to set it up.<br/>
      </p>
      <button className="get-button btn btn-primary btn-block" onClick={instPage}>
       INSTRUCTIONS
       </button>
  </div>
  );
};

export default Home;
