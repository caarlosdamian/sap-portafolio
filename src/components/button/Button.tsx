import React from "react";
import "./Button.scss";

interface ButtonI
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
}

export const Button = ({ label, ...props }: ButtonI) => {
  return (
    <button {...props} className="button">
      {label}
    </button>
  );
};
