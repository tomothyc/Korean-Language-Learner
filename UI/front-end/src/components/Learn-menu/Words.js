import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./submenu.css";

const Words = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div
      onMouseOver={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      <Link className="nav-link" onClick={() => setShowDropDown(!showDropDown)}>
        3 Words
      </Link>
      {showDropDown && (
        <ul
          className="navbar-nav"
          style={{
            position: "absolute",
            display: "inline-block",
            right: "-90%",
            top: "0%",
            backgroundColor: "#212529",
          }}
        >
          <li className="nav-item">
            <Link to={"/practice/words/2syl"} className="nav-link">
              3.1 Two syllables without ending Consonant
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/practice/words/3syl"} className="nav-link">
              3.2 Three syllables without ending Consonant
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/practice/words/2sylC"} className="nav-link">
              3.3 Two syllables with ending Consonant
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/practice/words/3sylC"} className="nav-link">
              3.4 Three syllables with ending Consonant
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/4syl"} className="nav-link">
              3.5 Four or more syllables
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Words;
