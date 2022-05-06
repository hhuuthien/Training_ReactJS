import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class HeaderHome extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/home">
            Cybersoft
          </NavLink>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/home" activeClassName="bg-white text-dark" activeStyle={{ borderRadius: "10px" }}>
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" activeClassName="bg-white text-dark" activeStyle={{ borderRadius: "10px" }}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" activeClassName="bg-white text-dark" activeStyle={{ borderRadius: "10px" }}>
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login" activeClassName="bg-white text-dark" activeStyle={{ borderRadius: "10px" }}>
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register" activeClassName="bg-white text-dark" activeStyle={{ borderRadius: "10px" }}>
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/btqlnd" activeClassName="bg-white text-dark" activeStyle={{ borderRadius: "10px" }}>
                  React form
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/lifecycle" activeClassName="bg-white text-dark" activeStyle={{ borderRadius: "10px" }}>
                  Life Cycle
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  React Hook
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="nav-link text-dark" to="/usestate">
                    Use State
                  </NavLink>
                  <NavLink className="nav-link text-dark" to="/useeffect">
                    Use Effect
                  </NavLink>
                  <NavLink className="nav-link text-dark" to="/apiclass">
                    API Class
                  </NavLink>
                  <NavLink className="nav-link text-dark" to="/apihook">
                    API Hook
                  </NavLink>
                  <NavLink className="nav-link text-dark" to="/customhook">
                    Custom Hook
                  </NavLink>
                  <NavLink className="nav-link text-dark" to="/reduxhook">
                    Redux Hook
                  </NavLink>
                  <NavLink className="nav-link text-dark" to="/usecallback">
                    Use Callback
                  </NavLink>
                  <NavLink className="nav-link text-dark" to="/usememo">
                    Use Memo
                  </NavLink>
                  <NavLink className="nav-link text-dark" to="/useref">
                    Use Ref
                  </NavLink>
                  <NavLink className="nav-link text-dark" to="/thunk">
                    Redux Thunk - To do list app
                  </NavLink>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
