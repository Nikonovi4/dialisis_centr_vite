import "./Header.scss";
import Logo from '../../utils/images/dialog-logo.png'

const Header = ({ children }) => {
  return (
    <section className="header">
      <main className="header__content">
        <img className="header__logo" src={Logo} alt="логотип" />
        {children}
      </main>
    </section>
  );
};

export default Header;
