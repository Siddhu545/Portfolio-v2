import React from "react";
import "./intro.css";
import Header from "../Header/header.tsx";
import Footer from "../Footer/footer.tsx";

function Intro() {
  return (
    <div className="intro">
      <Header />
      <div className="left-partition">
        <div className="introduction">
          <p>This is a small introduction text.</p>
        </div>
      </div>
      <div className="image"></div>
      <Footer />
    </div>
  );
}

export default Intro;
