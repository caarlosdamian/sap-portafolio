import React from "react";
import "./Button.scss";

interface ButtonI {
  label: string;
}

export const Button = ({ label }: ButtonI) => {
  return <button className="button">{label}</button>;
};
