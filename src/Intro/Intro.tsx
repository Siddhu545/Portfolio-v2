import React from "react";
import "./intro.css";
import Header from "../Header/header.tsx";
import Footer from "../Footer/footer.tsx";

function Intro() {
  return (
    <div className="intro">
      <Header />
      <div>Left Partition</div>
      <div>Image</div>
      <div>social media footer</div>
      <Footer />
    </div>
  );
}

export default Intro;
