import React, { useState } from "react";
import { Button } from "../../components/button/Button";
import { TextInput } from "../../components/textInput/TextInput";
import Rings from "../../assets/images/pattern-rings.svg";
import "./Contact.scss";

export const Contact = () => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState(false);

  const onFormChange = (e: any) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (contactForm.email.match(mailformat)) {
      setError(false);
    } else {
      setError(true);
    }
  };

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
        <TextInput
          placeholder="NAME"
          name="name"
          onChange={(e) => onFormChange(e)}
        />
        <TextInput
          placeholder="EMAIL"
          name="email"
          error={error}
          onChange={(e) => onFormChange(e)}
        />
        <TextInput
          type="text-area"
          placeholder="MESSAGE"
          name="message"
          onChange={(e) => onFormChange(e)}
        />
        <Button label="SEND MESSAGE" onClick={onSubmit} />
      </div>
    </div>
  );
};
