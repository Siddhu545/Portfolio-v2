import React from "react";
import Header from "../Header/header.tsx";
import Footer from "../Footer/footer.tsx";
import './resume.css'

function Resume() {
  return (
      <><Header /><>
      <div className="resume-container">
        <div className="education">
          <h2>Education</h2>
          <div className="education-card">
            <h3>B.Tech</h3>
            <p>Vellore Institute Of Technology | July'22</p>
          </div>
          <div className="education-card">
            <h3>12th Grade</h3>
            <p>Residential College | May'18</p>
          </div>
          <div className="education-card">
            <h3>10th Grade</h3>
            <p>Residential School | April'16</p>
          </div>
        </div>
        <div className="experience">
          <h2>Experience</h2>
          <div className="experience-card">
            <h3>Mobile Devloper Intern</h3>
            <p>Honeywell Technology Solutions(BMS) | 6 months</p>
          </div>
          <div className="experience-card">
            <h3>Software Developer 1</h3>
            <p>Honeywell Technology Solutions(HBT) | 1.5 years</p>
          </div>
        </div>
      </div>
    </><Footer /></>
  );
}

export default Resume;

