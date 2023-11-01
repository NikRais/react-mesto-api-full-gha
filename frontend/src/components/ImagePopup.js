import React from "react";

const ImagePopup = ({ card, onClose }) => {
  return (
    <div className={`popup popup-image ${card.link ? "popup_opened" : ""}`}>
      <div className="popup__image-container">
        <button type="button" className="popup__close" onClick={onClose}></button>
        <figure className="popup__figure">
          <img className="popup__img" src={card.link} alt={card.name}/>
          <figcaption className="popup__figcaption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default ImagePopup;