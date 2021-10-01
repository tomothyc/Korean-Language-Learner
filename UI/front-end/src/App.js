import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardAdmin from "./components/BoardAdmin";
<<<<<<< HEAD
=======
import Learn from "./components/Learn";
>>>>>>> 26a68b3226d2fea4d012aaae29050eb29150d13f

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

const App = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showUserBoard, setShowUserBoard] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
<<<<<<< HEAD
  const { user: currentUser } = useSelector(state => state.auth);
=======
  const { user: currentUser } = useSelector((state) => state.auth);
>>>>>>> 26a68b3226d2fea4d012aaae29050eb29150d13f
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(currentUser);
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoggedIn(true);
      if (user.isAdmin) {
        setShowAdminBoard(true);
        setShowUserBoard(false);
      } else {
        setShowUserBoard(true);
        setShowAdminBoard(false);
      }
    }

<<<<<<< HEAD
    history.listen(location => {
=======
    history.listen((location) => {
>>>>>>> 26a68b3226d2fea4d012aaae29050eb29150d13f
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <Router history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            simpleAuth
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showUserBoard && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}
          </div>

<<<<<<< HEAD
=======
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/learn"} className="nav-link">
                Learn
              </Link>
            </li>
          </div>

>>>>>>> 26a68b3226d2fea4d012aaae29050eb29150d13f
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/admin" component={BoardAdmin} />
<<<<<<< HEAD
=======
            <Route exact path="/learn" component={Learn} />
>>>>>>> 26a68b3226d2fea4d012aaae29050eb29150d13f
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
