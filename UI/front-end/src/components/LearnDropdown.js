import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Letters from "./Learn-menu/Letters";
import Syllables from "./Learn-menu/Syllables";
import Words from "./Learn-menu/Words";
import Dictation from "./Learn-menu/Dictation";

const LearnDropdown = () => {
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    const hideDropDown = (e) => {
      setShowDropDown(false);
    };

    if (showDropDown) {
      window.addEventListener("click", hideDropDown);
    }

    return () => {
      window.removeEventListener("click", hideDropDown);
    };
  }, [showDropDown]);

  return (
    <div
      onMouseOver={() => setShowDropDown(true)}
      onMouseLeave={() => setShowDropDown(false)}
    >
      <Link className="nav-link">Learn</Link>
      {showDropDown && (
        <ul
          className="navbar-nav taskbar"
          style={{
            position: "absolute",
            display: "inline-block",
            backgroundColor: "#212529",
          }}
        >
          <li>
            <Letters className="nav-item" />
          </li>
          <li className="nav-item">
            <Syllables />
          </li>
          <li className="nav-item">
            <Words />
          </li>
          <li className="nav-item">
            <Dictation />
          </li>
          <li className="nav-item">
            <Link to={"/practice/shortsent/shortsent"} className="nav-link">
              5 Short Sentences
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/practice/longsent/longsent"} className="nav-link">
              6 Long Sentences
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LearnDropdown;
