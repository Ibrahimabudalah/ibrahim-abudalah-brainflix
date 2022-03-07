import React from "react";
import "./Header.scss";
import logo from "../../assets/logos/BrainFlix-logo.svg";
import uploadLogo from "../../assets/icons/upload.svg";
import profilePic from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="BrainFlix logo" className="header__logo" />
      </Link>

      <div className="header__container-two">
        <input
          type="text"
          placeholder="Search"
          className="header__container-two__input"
        ></input>
        <img
          src={profilePic}
          alt="Profile Avatar"
          className="header__container-two__picture"
        />
      </div>

      <div className="header__container">
        <Link to="/upload">
          <button className="header__container__button">
            <img
              src={uploadLogo}
              alt="upload"
              className="header__container__button__icon"
            />
            UPLOAD{" "}
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
