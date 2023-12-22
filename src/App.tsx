import React from "react";
import Intro from "./Intro/Intro.tsx";
import { Routes, Route } from "react-router-dom";
import Projects from "./Projects/projects.tsx";
import Skills from "./Skills/skills.tsx";
import Blog from "./Blog/blog.tsx";
import Contact from "./Contact/contact.tsx";
import Resume from "./Resume/resume.tsx";
import { toast, ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Resume" element={<Resume />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
