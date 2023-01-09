import React from "react";
import { experienceData } from "../../utils";
import Rings from "../../assets/images/pattern-rings.svg";

import "./Experience.scss";

export const Experience = () => {
  return (
    <section className="experience-container">
      <img
        src={Rings}
        alt="rings-bottom"
        className="header-pattern-rings-experience"
      />
      {experienceData.map((item) => (
        <div className="experience-labels-container" key={item.id}>
          <h1 className="experience-title">{item.title}</h1>
          <span className="experience-description">{item.description}</span>
        </div>
      ))}
    </section>
  );
};
