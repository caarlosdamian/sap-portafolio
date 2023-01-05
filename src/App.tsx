import React from "react";
import Rings from "./assets/images/pattern-rings.svg";
import Circle from "./assets/images/pattern-circle.svg";
import { Contact, Experience, Footer, Header, Hero } from "./sections";
import "./index.scss";

function App() {
  return (
    <div className="app-container">
      <img src={Circle} alt="" className="header-pattern-circle" />
      <img src={Rings} alt="" className="header-pattern-rings" />
      <Header />
      <Hero />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
