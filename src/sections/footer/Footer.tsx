import React from "react";
import FrontMentor from "../../assets/images/icon-frontend-mentor.svg";
import Github from "../../assets/images/icon-github.svg";
import Linkedin from "../../assets/images/icon-linkedin.svg";
import Twitter from "../../assets/images/icon-twitter.svg";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <hr className="top-line" />
      <div className="footer-wrapper">
        <h1 className="footer-logo">adamkeyes</h1>
        <div className="footer-social-container">
          <img src={Github} alt="" className="footer-social-icon" />
          <img src={FrontMentor} alt="" className="footer-social-icon" />
          <img src={Linkedin} alt="" className="footer-social-icon" />
          <img src={Twitter} alt="" className="footer-social-icon" />
        </div>
      </div>
    </footer>
  );
};
