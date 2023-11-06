import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Pages/Home";
import Skill from "./Pages/Skill";
import Portfolio from "./Pages/Portfolio";
import Project from "./Pages/Project";
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/Accueil" element={<Home />} />
        <Route path="/Compétences" element={<Skill />} />
        <Route path="/Projet" element={<Project />} />
        <Route path="/Projet/Portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;