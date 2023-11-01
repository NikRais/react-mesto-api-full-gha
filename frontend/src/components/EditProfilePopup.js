import React, { useContext, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import useFormValidation from '../hooks/useFormValidation';

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser, onLoading }) => {
  const currentUser = useContext(CurrentUserContext);
  const { enteredValues, errors, handleChange, isFormValid, resetForm } = useFormValidation();

  useEffect(() => {
    currentUser ? resetForm(currentUser) : resetForm();
  }, [resetForm, isOpen, currentUser]);

  const handleSubmit = (event) => {
    // Запрещаем браузеру переходить по адресу формы
    event.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: enteredValues.name,
      about: enteredValues.about,
    });
  };

  return (
    <PopupWithForm
      name="edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Имя"
        name="name"
        id="name"
        className="popup__input popup__input_type_name"
        minLength="2"
        maxLength="40"
        required
        value={enteredValues.name || ''}
        onChange={handleChange}
      />
      <span className="popup__input-error" id="username-error">{errors.name}</span>

      <input
        type="text"
        placeholder="О себе"
        name="about"
        id="about"
        className="popup__input popup__input_type_profession"
        minLength="2"
        maxLength="200"
        required
        value={enteredValues.about || ''}
        onChange={handleChange}
      />
      <span className="popup__input-error" id="profession-error">{errors.name}</span>

      <button type="submit" className="popup__submit" disabled={!isFormValid}>
        {onLoading ? "Сохранение..." : "Сохранить"}
      </button>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
