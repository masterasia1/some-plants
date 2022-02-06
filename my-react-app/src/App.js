import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./components/login"
import Register from "./components/register"
const App = () => {
  return (
    <>
      <h1>Lambda Plants</h1>
      <p>We Love Plants!</p>
      <Router>
      <nav className="navbar">
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </nav>
      <Routes>
      <Route exact path="/signin" component={Register}/>
      <Route path="/register" component={Login}/>
      </Routes>
     
      </Router>
    </>
  );
};
export default App;