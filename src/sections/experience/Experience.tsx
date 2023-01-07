import React from "react";
import { experienceData } from "../../utils";
import "./Experience.scss";

export const Experience = () => {
  return (
    <div className="experience-container">
      {experienceData.map((item) => (
        <div className="experience-labels-container" key={item.id}>
          <h1 className="experience-title">{item.title}</h1>
          <span className="experience-description">{item.description}</span>
        </div>
      ))}
    </div>
  );
};
