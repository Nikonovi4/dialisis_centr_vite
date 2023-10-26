import "./LoginPage.scss";
import Logo from "../../utils/images/newDialogLogo.jpg";

const LoginPage = () => {
  return (
    <section className="login">
      <div className="login__content">
        <img alt="логотип" src={Logo} className="login__logo" />
        <hr className="login__line" />
        <form className="login__form">
          <h2 className="login__title">Вход</h2>
          <fieldset className="login__fildset">
            <input
              className="login__input"
              type="text"
              required
              name="login"
              minLength="4"
              maxLength="40"
              placeholder="Логин"
            />
            <input
              className="login__input"
              type="password"
              required
              name="password"
              minLength="6"
              maxLength="40"
              placeholder="Пароль"
            />

            <button className="login__button" type="submit">
              Войти
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
