import React, { InputHTMLAttributes } from "react";
import "./TextInput.scss";

interface TextInputI extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  error?: boolean;
}

export const TextInput = ({
  type,
  placeholder,
  error,
  ...props
}: TextInputI) => {
  return (
    <div className="input-wrapper">
      <input
        {...props}
        className={`input-container ${type} ${error ? "error" : ""} `}
        type="text"
        id=""
        placeholder={placeholder}
      />
      {error && <span className="error-label">Sorry, invalid format here</span>}
    </div>
  );
};
