import React from "react";
import FrontMentor from "../../assets/images/icon-frontend-mentor.svg";
import Github from "../../assets/images/icon-github.svg";
import Linkedin from "../../assets/images/icon-linkedin.svg";
import Twitter from "../../assets/images/icon-twitter.svg";
import Rings from "../../assets/images/pattern-rings.svg";
import Circle from "../../assets/images/pattern-circle.svg";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="header-container">
      <img src={Circle} alt="" className="header-pattern-circle" />
      <img src={Rings} alt="" className="header-pattern-rings" />
      <h1 className="header-logo">adamkeyes</h1>
      <div className="header-social-container">
        <img src={Github} alt="" className="header-social-icon" />
        <img src={FrontMentor} alt="" className="header-social-icon" />
        <img src={Linkedin} alt="" className="header-social-icon" />
        <img src={Twitter} alt="" className="header-social-icon" />
      </div>
    </div>
  );
};
