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
        <Route path="/Home" element={<Home />} />
        <Route path="/Skill" element={<Skill />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Project/Portfolio" element={<Portfolio />} />
        {/* <Route path="/Project/Youtube2mp4" element={<Youtubetomp3 />} />
        <Route path="/Project/password" element={<PassworkMaker />} />
        <Route path="/Project/Quiz" element={<Quiz />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
