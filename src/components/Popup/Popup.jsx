import "./Popup.scss";

const Popup = ({
  setOpenPopup,
  isOpenPopup,
  children,
  title,
  submitButtonName,
}) => {
  const closePopup = () => {
    setOpenPopup(false);
  };

  return (
    <section className={`popup ${isOpenPopup ? "" : "popup_invisible"}`}>
      <main className="popup__content">
        <button
          className="popup__close-button"
          aria-label="кнопка закрытия всплывающего окна."
          type="button"
          onClick={closePopup}
        ></button>
        <h2 className="popup__title">{title}</h2>
        <form className="popup__form">
          <fieldset className="popup__fildset">{children}</fieldset>
        </form>
        <button className="popup__add-button">{submitButtonName}</button>
      </main>
    </section>
  );
};

export default Popup;
