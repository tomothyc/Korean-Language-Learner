import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const Home = () => {
  const [content, setContent] = useState("");

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Home</h3>
      </header>
    </div>
  );
};

export default Home;
