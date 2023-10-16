import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./Pages/Home";
import Quiz from './Pages/Quiz';
import Skill from './Pages/Skill';
import Porfolio from './Pages/Porfolio';
import Project from './Pages/Project';
import PassworkMaker from './Pages/PassworkMaker';
import Youtubetomp3 from './Pages/Youtubetomp3';
import Home from './Pages/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='*' element={<Home/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Youtube2mp4' element={<Youtubetomp3/>}/>
    <Route path='/password' element={<PassworkMaker/>}/>
    <Route path='/Project' element={<Project/>}/>
    <Route path='/porfolio' element={<Porfolio/>}/>
    <Route path='/Skill' element={<Skill/>}/>
    <Route path='/Quiz' element={<Quiz/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;