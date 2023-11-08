/* eslint-disable react/prop-types */

import "./Popup.scss";


const Popup = ({
  setOpenPopup,
  isOpenPopup,
  children,
  title,
  submitButtonName,
  setValues,
  handleSubmit,
}) => {
  const closePopup = () => {
    setOpenPopup(false);
    setValues("");
  };

  return (
    <section className={`popup ${isOpenPopup ? "" : "popup_invisible"}`}>
      <main className="popup__content">
        <form className="popup__form" onSubmit={handleSubmit}>
          <button
            className="popup__close-button"
            aria-label="кнопка закрытия всплывающего окна."
            type="reset"
            onClick={closePopup}
          />
          <h2 className="popup__title">{title}</h2>
          <fieldset className="popup__fildset">{children}</fieldset>
          <button type="submit" className="popup__add-button">
            {submitButtonName}
          </button>
        </form>
      </main>
    </section>
  );
};

export default Popup;
