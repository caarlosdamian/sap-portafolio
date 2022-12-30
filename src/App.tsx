import React from "react";
import "./index.scss";
import { Contact, Experience, Footer, Header, Hero } from "./sections";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
