import React from "react";
import Linkedin from "./../assets/icons/linkedin.svg";
import GitHub from "./../assets/icons/github.svg";

const Footer = () => {
  return (
    <footer className="footer-p">
      <button>
        <a href="https://romainsavigny.be/">Contact moi</a>
      </button>
      <div className="reseau" target="_blank" rel="noreferrer">
        <a href="https://www.linkedin.com/in/romain-savigny-417b55282/">
          <img src={Linkedin} alt="Logo Linkedin" />
        </a>
        <a href="https://github.com/IAmRom1" target="_blank" rel="noreferrer">
          <img src={GitHub} alt="Logo GitHub" />
        </a>
      </div>
      <p>&copy; Romain Savigny. Tous droits réservés</p>
    </footer>
  );
};

export default Footer;
