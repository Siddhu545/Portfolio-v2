import React from "react";
import "./intro.css";
import Header from "../Header/header.tsx";
import Footer from "../Footer/footer.tsx";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function Intro() {
  const resumeUrl = "http://localhost:5000/download";

  const handleDownloadResume = () => {
    axios({
      method: "get",
      url: resumeUrl,
      responseType: "arraybuffer",
    })
      .then((response) => {
        const blob = new Blob([response.data], { type: "application/pdf" });

        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        toast.error("An error occurred. Please try again later.");
      });
  };

  return (
    <>
      <Header />
      <div className="intro">
        <div className="left-partition">
          <div className="introduction">
            <div className="hello-text">
              <span>- HELLO</span>
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
              <p onClick={handleDownloadResume}>Downlod Resume</p>
            </div>
          </div>
        </div>
        <div className="image">
          <img src="pictures/Picture.png" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Intro;
