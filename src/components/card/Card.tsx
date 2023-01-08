import React from "react";
import { projectType } from "../../utils";
import { Button } from "../button/Button";
import "./Card.scss";

interface CardI {
  item: projectType;
}
export const Card = ({ item }: CardI) => {
  return (
    <div className="project-bottom-wrapper" key={item.id}>
      <div className="overflow-wrapper">
        <Button label="VIEW PROJECT" />
        <Button label="VIEW CODE" />
      </div>
      <img src={item.img} alt={item.id} className="project-img" />
      <h1 className="project-title">{item.title}</h1>
      <div className="project-tool-container">
        {item.tools.map((tool) => (
          <span className="tool-title" key={tool.id}>
            {tool.name}
          </span>
        ))}
      </div>
      <div className="project-button-container">
        <Button label="VIEW PROJECT" />
        <Button label="VIEW CODE" />
      </div>
    </div>
  );
};
