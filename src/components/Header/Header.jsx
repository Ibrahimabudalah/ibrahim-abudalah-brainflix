import React from "react";
import "./Header.scss";
import logo from "../../assets/logos/BrainFlix-logo.svg";
import uploadLogo from "../../assets/icons/upload.svg";
import searchLogo from "../../assets/icons/search.svg";
import profilePic from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="BrainFlix logo" className="header__logo" />
      </Link>

      <div className="header__container">
        <input
          type="text"
          placeholder="Search"
          className="header__container__input"
        />
        <button className="header__container__button">
          <img
            src={uploadLogo}
            alt="upload"
            className="header__container__button__upload"
          />{" "}
          UPLOAD
        </button>
        <img
          src={profilePic}
          alt="Profile Avatar"
          className="header__container__avatar"
        />
        <img
          src={searchLogo}
          alt="search"
          className="header__container__input__search"
        />
        <img
          src={profilePic}
          alt="Profile Avatar"
          className="header__container__picture"
        />
      </div>
      <button className="header__button">
        <img src={uploadLogo} alt="upload" className="header__button__upload" />{" "}
        UPLOAD
      </button>
    </header>
  );
}

export default Header;
