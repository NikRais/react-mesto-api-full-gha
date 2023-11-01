import { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import useFormValidation from '../hooks/useFormValidation';

const AddPlacePopup = ({ isOpen, onClose, onAddPlace, onLoading }) => {
  const { enteredValues, errors, handleChange, isFormValid, resetForm } = useFormValidation();

  const handleSubmit = (event) => {
    event.preventDefault();

    onAddPlace({
      name: enteredValues.title,
      link: enteredValues.link,
    });
  };

  useEffect(() => {
    resetForm();
}, [resetForm, isOpen])

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        value={enteredValues.title || ''}
        type="text"
        placeholder="Название"
        name="title"
        id="title"
        className="popup__input popup__input_type_title"
        minLength="2"
        maxLength="30"
        required
        onChange={handleChange}
      />
      <span className="popup__input-error" id="title-error">{errors.title}</span>
      <input
        value={enteredValues.link || ''}
        type="url"
        placeholder="Ссылка на картинку"
        name="link"
        id="link"
        className="popup__input popup__input_type_link"
        required
        onChange={handleChange}
      />
      <span id="link-error" className="popup__input-error">{errors.link}</span>

      <button type="submit" className="popup__submit" disabled={!isFormValid}>
        {onLoading ? "Сохранение..." : "Создать"}
      </button>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
