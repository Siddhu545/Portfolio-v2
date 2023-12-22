import React, { useState } from "react";
import Header from "../Header/header.tsx"; // Assuming it's a CSS file
import Footer from "../Footer/footer.tsx"; // Assuming it's a CSS file
import "./skills.css"; // Your Skills component CSS file
import { Link } from "react-router-dom";

function Skills() {
  return (
    <>
      <Header />
      <div className="skills">
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
                packages and web page editors now use Lorem Ipsum as their
                default model text, and a search for 'lorem ipsum' will uncover
                many web sites still in their infancy. Various versions have
                evolved over the years, sometimes by accident, sometimes on
                purpose
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
          <div className="skill-cards">
            {/* Frontend Card */}
            <div className="skill-card">
              <h3>Frontend</h3>
              <ul>
                <li>React-Native</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>

                {/* Add more frontend skills as needed */}
              </ul>
            </div>

            {/* Backend Card */}
            <div className="skill-card">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Python Flask</li>
                <li>Express JS</li>
                {/* Add more backend skills as needed */}
              </ul>
            </div>

            {/* Database Card */}
            <div className="skill-card">
              <h3>Database</h3>
              <ul>
                <li>MySQL</li>
                <li>DynamoDB</li>
                {/* Add more database skills as needed */}
              </ul>
            </div>

            {/* Others Card */}
            <div className="skill-card">
              <h3>Others</h3>
              <ul>
                <li>Git</li>
                <li>RESTful APIs</li>
                <li>AWS</li>
                {/* Add more skills in the "Others" category */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Skills;
