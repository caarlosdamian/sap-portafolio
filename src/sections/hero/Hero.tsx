import React from "react";
import AvatarImg from "../../assets/images/image-profile-mobile.webp";
import "./Hero.scss";

export const Hero = () => {
  return (
    <div className="hero-container">
      <img src={AvatarImg} alt="AvatarImg" className="hero-img" />
      <h1 className="hero-title">
        Nice to meet you! I’m <strong className="hero-name">Adam Keyes</strong>.
      </h1>
      <p className="hero-description">
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      <button className="hero-button">CONTACT ME</button>
    </div>
  );
};
