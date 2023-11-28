import React from "react";
import "./App.css";
import Intro from "./Intro/Intro.tsx";
import { Routes, Route } from "react-router-dom";
import Projects from "./Projects/projects.tsx";
import Skills from "./Skills/skills.tsx";
import Blog from "./Blog/blog.tsx";
import Contact from "./Contact/contact.tsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
