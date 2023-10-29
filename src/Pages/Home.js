import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import Skill_img from "../assets/imgs/TableauSkill.png";
import ScrollTop from "../components/ScrollTop";
import Projet_img from "../assets/imgs/Projet.png";
import Footer2 from "../components/Footer2";

const Home = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessage = document.querySelector("form");

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMessage.innerHTML = "<p class=success>Message envoyé!</p>";
        },
        (error) => {
          console.log(error.text);
          formMessage.innerHTML =
            "<p class=error>Une erreur s'est produite, veuillez réessayer</p>";
          setTimeout(() => {
            formMessage.innerHTML = "";
          }, 5000);
        }
      );
  };
  const [splineStyle, setSplineStyle] = useState({
    width: "100%",
    height: "600px",
  });

  useEffect(() => {
    const handleWindowResize = () => {
      const maxWidth = 1100;

      if (window.innerWidth <= maxWidth) {
        setSplineStyle({
          width: "100%",
          height: "600px",
        });
      } else {
        setSplineStyle({
          width: "100%",
          height: "600px",
        });
      }
    };

    window.addEventListener("resize", handleWindowResize);

    handleWindowResize();
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <ScrollTop />
      <Navbar />
      <section className="intro">
        <div className="container">
          <h1>Développeur Front-End</h1>
          <p>
            Un an d'apprentissage en autodidacte, étudiant en développement web.
          </p>
        </div>
        <Spline
          className="spline"
          scene="https://prod.spline.design/W5e-RBiReIhiJP5F/scene.splinecode"
          style={splineStyle}
        />
        <div className="scroll">
          <svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#ffffffff"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 6V14"
              stroke="#ffffffff"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 11L12 14L9 11"
              stroke="#ffffffff"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <Spline
            className="spline"
            scene="https://prod.spline.design/TspWfyl-7Z0Aeb0U/scene.splinecode"
          />
          <div className="text">
            <h2>A propos de moi</h2>
            <p>
              Bonjour, je m'appelle Romain et j'ai 20 ans. J'étais initialement
              passionné par le montage vidéo, mais il y a un an, j'ai découvert
              le monde du développement web. Cette découverte m'a rapidement
              passionné, et depuis lors, j'ai consacré un an à apprendre le
              développement web front-end en autodidacte.
            </p>
            <button>Télécharger mon CV</button>
          </div>
        </div>
      </section>
      <section className="skill">
        <div className="wave">
          <svg
            width="1920"
            height="579"
            viewBox="0 0 1920 579"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_3_12)">
              <path
                d="M856.506 162.027C494.939 101.525 127.441 463.104 0 557V0H1971.7C2124.02 206.112 1288.11 234.248 856.506 162.027Z"
                fill="#2933B9"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_3_12"
                x="-8"
                y="0"
                width="1998"
                height="579"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-4" dy="18" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_3_12"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_3_12"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <h2>Compétences</h2>
        <div className="container">
          <div className="box">
            <p>
              J'ai acquis de solides compétences en HTML et CSS, avec une
              préférence marquée pour SCSS. En ce qui concerne le JavaScript,
              j'ai des bases, et je suis particulièrement attiré par React, une
              bibliothèque que j'apprécie beaucoup. J'ai appris tout cela de
              manière autodidacte.
            </p>
            <NavLink to="/skill">
              <button>En savoir plus</button>
            </NavLink>
          </div>
          <img
            src={Skill_img}
            alt="Tableau avec du React.JS, HTML, CSS, SASS, JS"
          />
        </div>
      </section>
      <section className="project">
        <h2>Projet</h2>
        <div className="container">
          <img src={Projet_img} alt="Usine a création de site internet" />
          <div className="text">
            <p>
              Pendant ma période d'apprentissage, j'ai travaillé sur différents
              projets, notamment la création d'un quiz, d'un générateur de mots
              de passe, d'un portfolio, et bien d'autres encore.
            </p>
            <button>En savoir plus</button>
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="wave">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1919"
            height="513"
            viewBox="0 0 1919 513"
            fill="none"
          >
            <g filter="url(#filter0_i_8_36)">
              <path
                d="M1919 512.5V-2L2.03848e-05 0V68V126.5C284.548 346.449 742.553 314.475 934.987 257.359C1310.5 202 1737.74 237.304 1919 512.5Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_8_36"
                x="-3"
                y="-7"
                width="1922"
                height="519.5"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="-3" dy="-16" />
                <feGaussianBlur stdDeviation="2.5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_8_36"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="container">
          <h2 id="contact">Contact moi</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Votre Prénom | Nom"
              minLength="2"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Votre E-mail"
              required
            />
            <textarea
              name="message"
              cols="30"
              rows="10"
              autoComplete="off"
              placeholder="Votre Message"
              minLength="15"
              maxLength="3000"
              required
            ></textarea>
            <input type="submit" />
          </form>
        </div>
      </section>
      <Footer2 />
    </>
  );
};

export default Home;
