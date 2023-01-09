import React from "react";
import { Button } from "../../components/button/Button";
import { TextInput } from "../../components/textInput/TextInput";
import Rings from "../../assets/images/pattern-rings.svg";
import "./Contact.scss";

export const Contact = () => {
  return (
    <div className="contact-container">
      <img
        src={Rings}
        alt="rings-bottom"
        className="header-pattern-rings-btm"
      />
      <div className="contact-left-wrapper">
        <h1 className="contact-left-title">Contact</h1>
        <span className="contect-information">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </span>
      </div>
      <div className="contact-right-wrapper">
        <TextInput placeholder="NAME" />
        <TextInput placeholder="EMAIL" />
        <TextInput type="text-area" placeholder="MESSAGE" />
        <Button label="SEND MESSAGE" />
      </div>
    </div>
  );
};
