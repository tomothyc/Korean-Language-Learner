import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./submenu.css";

const Dictation = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div
      onMouseOver={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      <Link className="nav-link" onClick={() => setShowDropDown(!showDropDown)}>
        4 Dictation
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
            <Link to={"/practice/dictation/sdictation"} className="nav-link">
              4.1 Short sentence Dictation
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/practice/dictation/ldictation"} className="nav-link">
              4.2 Long sentence dictation
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dictation;
