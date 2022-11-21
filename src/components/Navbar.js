import React from "react";
import { dark } from "@material-ui/core/styles/createPalette";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      {/* <nav className={"navbar navbar-expand-sm bg-secondary navbar-dark"}>  */}
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav"
            style={{
              backgroundColor: "DodgerBlue",
              padding: "10px 10px 10px 10px",
              borderRadius: "15px",
            }}
          >
            {/* <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li> */}
            {/* <li className="nav-item">
            <a className="nav-link" href="/">{props.AboutText}</a>
          </li> */}
            {/* <li className="nav-item dropdown"> */}
            {/* <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a> */}

            {/* <ul className="dropdown-menu"> */}
            <li>
              <a className="dropdown-item1" href="/">
                <NavLink
                  to="/Netflix"
                  style={{ marginRight: "20px", color: "white" }}
                >
                  Netflix{" "}
                </NavLink>
              </a>
            </li>
            <li>
              <a className="dropdown-item2" href="/">
                <NavLink
                  to="/About"
                  style={{ marginRight: "20px", color: "white" }}
                >
                  About
                </NavLink>
              </a>
            </li>

            {/* <li><hr className="dropdown-divider"/></li> */}
            <li>
              <a className="dropdown-item3" href="/">
                <NavLink
                  to="/Basicform"
                  style={{ marginRight: "20px", color: "white" }}
                >
                  Basicform
                </NavLink>
              </a>
            </li>
            {/* </ul> */}
            {/* </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
            style={{ marginLeft: "35px" }}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckCheckedDisabled"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckCheckedDisabled"
            >
              {" "}
              Enable Darkmode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
//  Navbar.PropTypes = {
//       title: PropTypes.string,
//       AboutText: PropTypes.string

//  }

//  Navbar.defaultprops={
//     title:' set title here',
//     AboutText: 'about text here'
//  }
