import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({ card, onCardClick, onCardLike, onCardDelete }) => {
  const currentUser = useContext(CurrentUserContext);

  /*Определяем, являемся ли мы владельцем текущей карточки*/
  const isOwn = card.owner === currentUser._id;

  /*Определяем, есть ли у карточки лайк, поставленный текущим пользователем*/
  const isLiked = card.likes.some((i) => i === currentUser._id);

  /*Создаём переменную, которую после зададим в `className` для кнопки лайка*/
  const cardLikeButtonClassName = `element__like-button ${
    isLiked ? "element__like-button-active" : ""
  }`;

  const handleClick = () => {
    onCardClick(card);
  };

  const handleLikeClick = () => {
    onCardLike(card);
  };

  const handleDeleteClick = () => {
    onCardDelete(card._id);
  };

  return (
    <div className="element">
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="element__container">
        <h3 className="element__title">{card.name}</h3>
        <div className="element__like">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          />
          <span className="element__like-number">{card.likes.length}</span>
        </div>
        {isOwn && (
          <button
            type="button"
            className="element__delete-button"
            onClick={handleDeleteClick}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
