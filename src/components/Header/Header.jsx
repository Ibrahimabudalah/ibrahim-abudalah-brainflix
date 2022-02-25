import React from "react";
import "./Header.scss";
import logo from "../../assets/logos/BrainFlix-logo.svg";
import profilePic from "../../assets/images/Mohan-muruge.jpg";

function Header() {
  return (
    <header>
      <img src={logo} alt="BrainFlix logo" className="logo" />
      <form className="form">
        <div className="form__container">
          <input type="text" placeholder="Search" className="form__container--input" />
          <img
            src={profilePic}
            alt="Profile Avatar"
            className="form__container--picture"/>
        </div>
        <button className="form__button">UPLOAD</button>
      </form>
    </header>
  );
}

export default Header;
