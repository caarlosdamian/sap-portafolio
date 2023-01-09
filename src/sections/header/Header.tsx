import React from "react";
import FrontMentor from "../../assets/images/icon-frontend-mentor.svg";
import Github from "../../assets/images/icon-github.svg";
import Linkedin from "../../assets/images/icon-linkedin.svg";
import Twitter from "../../assets/images/icon-twitter.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header-container">
      <h1 className="header-logo">adamkeyes</h1>
      <div className="header-social-container">
        <img src={Github} alt="" className="header-social-icon" />
        <img src={FrontMentor} alt="" className="header-social-icon" />
        <img src={Linkedin} alt="" className="header-social-icon" />
        <img src={Twitter} alt="" className="header-social-icon" />
      </div>
    </header>
  );
};
