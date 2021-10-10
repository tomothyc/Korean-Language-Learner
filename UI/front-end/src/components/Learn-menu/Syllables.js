import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./submenu.css";

const Syllables = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div
      onMouseOver={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      <Link className="nav-link" onClick={() => setShowDropDown(!showDropDown)}>
        2 Syllables
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
            <Link to={"/practice/syllables/CV"} className="nav-link">
              2.1 Consonant + Vowel
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/practice/syllables/SCV"} className="nav-link">
              2.2 Shift Consonant + Vowel
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/practice/syllables/CVC"} className="nav-link">
              2.3 Consonant + Vowel + Consonant
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/practice/syllables/SCVC"} className="nav-link">
              2.4 Shift Consonant + Vowel + Consonant
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/practice/syllables/CVCC"} className="nav-link">
              2.5 Consonant + Vowel + Consonant + Consonant
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Syllables;
