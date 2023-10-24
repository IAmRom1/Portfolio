import React from "react";
import Navbar from "../components/Navbar";
import SkillImg from "../assets/imgs/skill.png";
import LogoPs from "../assets/icons/PS.svg";
import LogoFigma from "../assets/icons/figma.svg";
import LogoVsCode from "../assets/icons/VSCode.svg";
import LogoFCPX from "../assets/icons/FCPX.svg";
import LogoPr from "../assets/icons/PR.svg";
import LogoOffice from "../assets/icons/office.svg";
import LogoHTML from "../assets/icons/HTML.svg";
import LogoCSS from "../assets/icons/CSS.svg";
import LogoSASS from "../assets/icons/SASS.svg";
import LogoJS from "../assets/icons/JS.svg";
import LogoREACT from "../assets/icons/REACT.svg";
import LogoPHP from "../assets/icons/PHP.svg";
import Footer from "../components/Footer";

const Skill = () => {
  return (
    <>
      <Navbar />
      <section className="presentation">
        <div className="container">
          <div className="box"></div>
          <div className="text">
            <h1>Mes compétences</h1>
            <p>
              J'ai commencé ma formation en HTML et CSS sur OpenClassroom il y a
              un an, et j'ai rapidement apprécié le domaine du développement
              web. J'ai progressé avec succès dans ce domaine. Une fois que j'ai
              maîtrisé <span>HTML</span> et <span>CSS</span>, j'ai décidé
              d'apprendre <span>SCSS</span> pour avoir plus de possibilités en
              matière de stylisation. Par la suite, j'ai approfondi mes
              compétences en apprenant <span>JavaScript</span>, ce qui m'a
              permis de rendre mes applications plus dynamiques. Actuellement,
              je me concentre sur <span>React</span>, et je continue à apprendre
              de nouvelles choses à son sujet.
            </p>
          </div>
          <img
            src={SkillImg}
            alt="Logo: HTML, CSS, SASS, Javascript, React et PHP"
          />
        </div>
        <div className="scroll">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="73"
            height="66"
            viewBox="0 0 73 66"
            fill="none"
          >
            <path
              d="M15.2083 41.25C15.2083 46.3554 17.4516 51.252 21.4446 54.8619C25.4375 58.4721 30.8531 60.4997 36.4999 60.4997C42.1468 60.4997 47.5625 58.4721 51.5556 54.8619C55.5484 51.252 57.7916 46.3554 57.7916 41.25V24.75C57.7916 19.6446 55.5484 14.7484 51.5556 11.1383C47.5625 7.52824 42.1468 5.5 36.4999 5.5C30.8531 5.5 25.4375 7.52824 21.4446 11.1383C17.4516 14.7484 15.2083 19.6446 15.2083 24.75V41.25Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M36 21V43"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M45.25 37L36.125 45.25L27 37"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>
      <section className="stats">
        <div className="container">
          <div className="software">
            <h3>Logiciels</h3>
            <div className="content">
              <img src={LogoPs} alt="Logo Photoshop" title="Photoshop" />
              <img src={LogoFigma} alt="Logo Figma" title="Figma" />
              <img src={LogoVsCode} alt="Logo Visual Code" title="VS Code" />
              <img
                src={LogoFCPX}
                alt="Logo Final Cut Pro X"
                title="Final Cut Pro X"
              />
              <img
                src={LogoPr}
                alt="Logo Premier Pro"
                title="Logo Premier Pro"
              />
              <img
                src={LogoOffice}
                alt="Logo Suite Office"
                title="Logo de la suite Office"
              />
            </div>
          </div>
          <div className="languages">
            <h3>Languages</h3>
            <div className="content">
              <img src={LogoHTML} alt="Logo HTML" title="Logo HTML" />
              <img src={LogoCSS} alt="Logo CSS" title="Logo CSS" />
              <img src={LogoSASS} alt="Logo SASS" title="Logo SASS" />
              <img src={LogoJS} alt="Logo Javascript" title="Logo Javascript" />
              <img src={LogoREACT} alt="Logo React.js" title="Logo React.JS" />
              <img src={LogoPHP} alt="Logo PHP" title="Logo PHP" />
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Skill;
