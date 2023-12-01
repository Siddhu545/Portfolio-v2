import React, { useState } from "react";
import Header from "../Header/header.tsx"; // Assuming it's a CSS file
import Footer from "../Footer/footer.tsx"; // Assuming it's a CSS file
import "./skills.css"; // Your Skills component CSS file
import { Link } from "react-router-dom";

function Skills() {
  return (
    <div className="skills">
      <Header />
      <div className="content">
        <div className="left-section">
          <div className="profile-picture">
            <img src="pictures/picture1.png" />
          </div>
        </div>

        <div className="right-section">
          <div className="about-me">
            <h2 className="about-me-text">About Me</h2>
            <p>
              making it look like readable English. Many desktop publishing
              packages and web page editors now use Lorem Ipsum as their default
              model text, and a search for 'lorem ipsum' will uncover many web
              sites still in their infancy. Various versions have evolved over
              the years, sometimes by accident, sometimes on purpose
            </p>
            <div className="contact-section">
              <div className="sign">
                {/* Your sign goes here */}
                <p>Your sign details</p>
              </div>
              <Link to="/contact" className="contact-button">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h2 className="skill-text">My Skills</h2>
        <div className="skill-set">
          <div className="skill-pair">
            <div>
              <p>React</p>
              <progress value={0.7}></progress>
            </div>
            <div>
              <p>JavaScript</p>
              <progress value={0.5}></progress>
            </div>
            <div>
              <p>JavaScript</p>
              <progress value={0.5}></progress>
            </div>
          </div>
          <div className="skill-pair">
            <div>
              <p>Python</p>
              <progress value={0.8}></progress>
            </div>
            <div>
              <p>MongoDB</p>
              <progress value={0.6}></progress>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Skills;
