import "./navBar.css";
import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <button className="nav-content">
          <img className="logo" src="./images/rac.svg" alt="" />
          <div className="navbar-words">Z-Edu</div>
        </button>
        <button className="nav-content">
          <img src="./images/Vector.svg" alt="" />
          <div className="navbar-words">Dashboard</div>
        </button>
        <button className="nav-content">
          <img src="./images/Vector-1.svg" alt="" />
          <div className="navbar-words">Reports</div>
        </button>
        <button className="nav-content">
          <img className="sign-out" src="./images/Vector-2.svg" alt="" />
          <div className="navbar-words">Sign Out</div>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
