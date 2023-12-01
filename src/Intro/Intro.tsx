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
          <div className="hello-text">
            <span>-HELLO</span>
          </div>
          <div className="name-text">
            <span>I'm Siddharth Khengare</span>
          </div>
          <div className="about-me-text">
            <span>
              many web sites still in their infancy. Various versions have
              evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like)
            </span>
          </div>
          <div className="cv-button">
          <p>Downlod Resume</p>  
          </div>
        </div>
      </div>
      <div className="image">
        <img src="pictures/Picture.png" />
      </div>
      <Footer />
    </div>
  );
}

export default Intro;
