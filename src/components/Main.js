import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import { About } from "../Pages/About";
import { Home } from "../Pages/Home";
import "./style.css";

import logo from "../asest/logo.jpg";

export function Main() {
  return (
    <Router>
      <div className="main">
        <div className="sitebar">
          <div className="logo">
            <p>Dartsiders CRUD</p>

            <div className="logo_img">
              <img src={logo} alt="" />
            </div>
          </div>

          <div className="link">
            <NavLink activeclassname="active" to="/">
              home
            </NavLink>
            <NavLink to="about">about</NavLink>
          </div>
        </div>
        <div className="rezalut">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// react -  dom    create-react-app     npm
//                                   node p m  start
//                                    n p x
