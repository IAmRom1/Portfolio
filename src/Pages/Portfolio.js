import React from "react";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";
import Footer from "../components/Footer";
import imgPortfolio from "./../assets/imgs/portfolio.png";
import TableauFigma from "./../assets/imgs/tableauFigma.png";

const Portfolio = () => {
  return (
    <>
      <ScrollTop />
      <Navbar />
      <section className="portfolio-intro">
        <h1>Portfolio</h1>
        <div className="container">
          <p>
            J'ai réalisé 3 portfolios auparavant, et celui-ci est de loin le
            plus ambitieux. Mes portfolios précédents étaient des sites d'une
            seule page avec des div imbriquées les unes dans les autres.
            Cependant, pour la création de celui-ci, j'ai repoussé les limites.
            Il s'agit d'une application React avec des pages multiples, et j'ai
            créé des illustrations uniques moi-même. De l'idée à la réalisation,
            ce nouveau portfolio représente un véritable défi de conception.
          </p>
          <img
            src={imgPortfolio}
            alt="Ilustration montrant le design et le developpement de site internet"
          />
        </div>
      </section>
      <section className="portfolio-explication">
        <div className="container">
          <p>
            J'ai créé toutes les illustrations et modèles 3D moi-même en
            utilisant Spline. Grâce à Spline, j'ai pu créer des éléments en 3D
            et les intégrer dans le site sans avoir nécessairement besoin de
            passer par three.js. Après avoir réalisé ces illustrations, j'ai
            conçu une maquette du site à l'aide de Figma et Photoshop, puis j'ai
            procédé au développement.
          </p>
          <img src={TableauFigma} alt="Pancarte avec le logo Figma" />
        </div>
        <div className="btn">
          <button>
            <a
              href="https://old1.romainsavigny.be/"
              target="_blank"
              rel="noreferrer"
            >
              Consultez le premier portfolio.
            </a>
          </button>
          <button>
            <a
              href="https://github.com/IAmRom1/Portfolio"
              target="_blank"
              rel="noreferrer"
            >
              Voir le code source
            </a>
          </button>
          <button>
            <a
              href="https://old2.romainsavigny.be/"
              target="_blank"
              rel="noreferrer"
            >
              Consultez le deuxième portfolio.
            </a>
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;
