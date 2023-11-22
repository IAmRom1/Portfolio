import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import UIProjet from "./../assets/imgs/UI-Project.png";
import VisuelFigma from "./../assets/imgs/visuelFigma.png";
import VisuelYTB2MP4 from "./../assets/imgs/VisuelYoutube2mp4.png";
import { motion } from "framer-motion";

const Project = () => {
  document.title = "Romain Savigny - Projet";
  return (
    <>
      <Navbar/>
      <ScrollTop/>
      <section className="Section1">
        <h1>Projet</h1>
        <div className="container">
          <motion.div
            initial={{opacity:0, x:-300}}
            animate={{opacity:1, x:0}}
            transition={{duration:1}}
          >

          <div className="text">
            <h2>De l'idée à la réalité</h2>
            <p>
              J'ai réalisé plusieurs projets personnels, et pour chacun d'entre
              eux, que ce soit à partir d'une idée personnelle ou d'une demande
              extérieure, voici ma démarche : tout d'abord, je conçois le design
              à l'aide de Figma. Ensuite, je réfléchis aux technologies les plus
              appropriées pour la réalisation du projet. Si besoin, je me
              documente sur les technologies que je ne maîtrise pas encore.
              Enfin, je me lance dans le développement en utilisant Visual
              Studio Code.
            </p>
          </div>
          </motion.div>
          <img
            src={UIProjet}
            alt="Ilustration Iterface Utilisateur, Expérience Utilisateur"
          />
        </div>
      </section>
      <section className="section2">
        <div className="container">
          <img src={VisuelFigma} alt="Maquette Figma" />
          <div className="text">
            <h2>Portfolio</h2>
            <p>
              Au fil de mon apprentissage, j'ai conçu plusieurs portfolios, et
              celui-ci est considérablement plus important que les deux
              précédents.
            </p>
            <NavLink to="/Projet/Portfolio">
              <button>En Savoir plus</button>
            </NavLink>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="container">
          <div className="text">
            <h2>Youtube to MP4</h2>
            <p>
              En réponse à certaines demandes, j'ai créé une application React
              qui permet de convertir des vidéos YouTube en fichiers au format
              MP4. J'ai commencé par concevoir une maquette dans Figma, ce qui
              m'a permis d'avoir une idée du design de l'application. Ensuite,
              j'ai développé l'application en utilisant une API.
            </p>

            <button>
              <a href="https://github.com/IAmRom1/Youtube-to-mp4" target="_blank"rel="noreferrer">
                code source
              </a>
            </button>
          </div>
          <img src={VisuelYTB2MP4} alt="Visuel d'un projet Youtube vers MP4" />
        </div>
      </section>
      <section className="more">
        <h2>Voir plus...</h2>
        <p>
          J'ai également réalisé d'autres petits projets, comme un quiz, un
          générateur de mots de passe, et même une application culinaire, etc.
          Pour la plupart de ces projets, vous pouvez les trouver sur mon
          GitHub, où je les ai presque tous intégrés.
        </p>
        <button>
          <a href="https://github.com/IAmRom1" target="_blank"rel="noreferrer">Mon GitHub</a>
        </button>
      </section>
      <Footer/>
    </>
  );
};

export default Project;
