const PopupWithForm = ({isOpen, onClose, name, title, children, onSubmit}) => {
  return (
    <div className={`popup popup-${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button type="button" className="popup__close" onClick={onClose}/>
        <fieldset  className="popup__form-set" name={`${name}`} id={`${name}`}>
        <h2 className="popup__title">{title}</h2>
        <form
          name={`${name}`}
          action="#"
          className="popup__form form"
          onSubmit={onSubmit}>
          {children}
        </form>
        </fieldset>
      </div>
    </div>
  );
};

export default PopupWithForm;