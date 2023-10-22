import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import Navbar from "../components/Navbar";
import Load from "../components/Load";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleSplineLoad = () => {
    setIsLoading(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    window.onload = () => {
      setIsLoading(false);
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    }
  }, [isLoading]);

  console.log("isLoading:", isLoading);

  return (
    <>
      <Navbar />
      {isLoading ? <Load /> : null}
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
          onLoad={handleSplineLoad}
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
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 6V14"
              stroke="#ffffffff"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 11L12 14L9 11"
              stroke="#ffffffff"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <Spline className="spline" scene="https://prod.spline.design/TspWfyl-7Z0Aeb0U/scene.splinecode" />
          <div className="text">
            <h2>A propos de moi</h2>
            <p>
              Bonjour, je m'appelle Romain et j'ai 20 ans. J'étais initialement
              passionné par le montage vidéo, mais il y a un an, j'ai découvert
              le monde du développement web. Cette découverte m'a rapidement
              passionné, et depuis lors, j'ai consacré un an à apprendre le
              développement web front-end en autodidacte.
            </p>
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
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
        <div className="spline">
          <Spline scene="https://prod.spline.design/376N0DYVecnAeCjk/scene.splinecode" />
          <p></p>
        </div>
      </section>
    </>
  );
};

export default Home;
