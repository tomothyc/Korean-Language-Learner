import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./submenu.css";

const Letters = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div
      onMouseOver={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      <Link className="nav-link" onClick={() => setShowDropDown(!showDropDown)}>
        1 Letters
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
            <Link to={"/practice/letters/Lhand"} className="nav-link">
              1.1 Basic Left Hand
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/practice/letters/Rhand"} className="nav-link">
              1.2 Basic Right Hand
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/practice/letters/Bhand"} className="nav-link">
              1.3 Left and Right Hand
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/practice/letters/SLhand"} className="nav-link">
              1.4 Shift Left Hand
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/practice/letters/SRhand"} className="nav-link">
              1.5 Shift Right Hand
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/practice/letters/Allletters"} className="nav-link">
              1.6 All letters
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Letters;
