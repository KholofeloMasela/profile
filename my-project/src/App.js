import "./App.css";
import React from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
    <Navbar />
    <About />
    <Skills />
    <Projects/>
    <Contact />
  </main>
  );
}

export default App;
