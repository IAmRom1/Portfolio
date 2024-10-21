import React, { useState, useEffect } from "react";

const PopUp = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const isPopUpClosed = localStorage.getItem("isPopUpClosed");
    if (isPopUpClosed === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("isPopUpClosed", "true");
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="PopUp">
      <button onClick={handleClose} className="close-button">X</button>
      <h2>Bienvenue sur mon portfolio ! </h2>
      <p>
        Ce site n'est plus mis à jour, il est donc possible que vous rencontriez des bugs et des projets anciens. Je m'en excuse.
        Je travaille actuellement sur un nouveau portfolio.
      </p>
    </div>
  );
};

export default PopUp;