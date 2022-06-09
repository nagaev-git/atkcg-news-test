import "./Profile.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Profile({ handleLogout }) {
  return (
    <>
      <Header />
      <section className="profile">
        <h1 className="profile__title">Привет, Admin</h1>
        <button
          type="button"
          className="profile__button-logout"
          onClick={handleLogout}
          aria-label="Выйти"
        >
          Выйти
        </button>
      </section>
      <Footer />
    </>
  );
}
