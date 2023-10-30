import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Pages/Home";
import Skill from "./Pages/Skill";
import Portfolio from "./Pages/Portfolio";
import Project from "./Pages/Project";
// import PassworkMaker from "./Pages/PassworkMaker";
// import Youtubetomp3 from "./Pages/Youtubetomp3";
// import Quiz from "./Pages/Quiz";
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/Accueil" element={<Home />} />
        <Route path="/Compétences" element={<Skill />} />
        <Route path="/Projet" element={<Project />} />
        <Route path="/Projet/Portfolio" element={<Portfolio />} />
        {/* <Route path="/Project/Youtube2mp4" element={<Youtubetomp3 />} />
        <Route path="/Project/password" element={<PassworkMaker />} />
        <Route path="/Project/Quiz" element={<Quiz />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
