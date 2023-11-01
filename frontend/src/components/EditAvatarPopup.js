import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar, onLoading }) => {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    avatarRef.current.value = ''
}, [isOpen])

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        placeholder="Ссылка"
        name="avatar"
        id="avatar"
        className="popup__input popup__input_type_avatar"
        required
        ref={avatarRef}
      />
      <span className="popup__input-error" id="avatar-error"></span>

      <button type="submit" className="popup__submit">
        {onLoading ? "Сохранение..." : "Сохранить"}
      </button>
    </PopupWithForm>
  )
};

export default EditAvatarPopup;
