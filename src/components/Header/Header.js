import "./Header.css";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <Link to="/" className="header__logo" />
        <nav className="header__navigation">
          <NavLink
            className="header__navigation-link"
            activeClassName="header__navigation-link_type_active-header"
            exact
            to="/"
          >
            На главную
          </NavLink>
          <NavLink
            className="header__navigation-link"
            activeClassName="header__navigation-link_type_active-header"
            to="/news"
          >
            Новости
          </NavLink>
          <NavLink
            className="header__navigation-link"
            activeClassName="header__navigation-link_type_active-header"
            to="/profile"
          >
            Профиль
          </NavLink>
        </nav>
      </header>
    </>
  );
}
