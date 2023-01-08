import React from "react";
import { Button } from "../../components/button/Button";
import { Card } from "../../components/card/Card";
import { projectsData } from "../../utils";
import "./Projects.scss";

export const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-top-container">
        <h1 className="project-top-title">Projects</h1>
        <Button label="CONTACT ME" />
      </div>
      <div className="project-bottom-container">
        {projectsData.map((item) => (
          <Card item={item}/>
        ))}
      </div>
    </div>
  );
};
