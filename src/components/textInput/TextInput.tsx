import React, { InputHTMLAttributes } from "react";
import './TextInput.scss'

interface TextInputI extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
}

export const TextInput = ({ type, placeholder }: TextInputI) => {
  return (
    <input
      className={`input-container ${type} `}
      type="text"
      name=""
      id=""
      placeholder={placeholder}
    />
  );
};
