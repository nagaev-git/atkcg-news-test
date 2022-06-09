import "./Login.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../Header/Header";

export default function Login({ handleLogin, isBadRequest }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isVisibleRequest, setIsVisibleRequest] = useState(false);
  const history = useHistory();

  useEffect(() => {
    stateCheck();
    // eslint-disable-next-line
  }, []);

  const stateCheck = () => {
    const user = localStorage.getItem("user");
    const password = localStorage.getItem("password");
    if (user && password) {
      history.push("/profile");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user, password);
    setIsVisibleRequest(true);
  };

  return (
    <>
      <Header />
      <section className="login">
        <div className="login-container">
          <h1 className="login__title">Рады видеть!</h1>
          <form name="login" className="login__form" onSubmit={handleSubmit}>
            <ul className="login__form-input-list">
              <li className="login__form-input-list-item">
                <p className="login__form-input-label">Login</p>
                <input
                  name="user"
                  type="text"
                  id="user"
                  onChange={(e) => setUser(e.target.value)}
                  className="login__form-input"
                  placeholder="Введите логин"
                  autoComplete="off"
                  defaultValue=""
                  minLength="2"
                  maxLength="30"
                  required
                />
              </li>
              <li className="login__form-input-list-item">
                <p className="login__form-input-label">Пароль</p>
                <input
                  name="password"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="login__form-input"
                  placeholder="Введите пароль"
                  autoComplete="off"
                  defaultValue=""
                  minLength="5"
                  maxLength="35"
                  required
                />
              </li>
            </ul>
            {isVisibleRequest && isBadRequest ? (
              <span className="login__form-submit_error">
                Имя пользователя или пароль введены не верно.
              </span>
            ) : (
              ""
            )}
            <div className="login__form-button-container">
              <button
                type="submit"
                className="login__form-submit"
                aria-label="Войти"
              >
                Войти
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
