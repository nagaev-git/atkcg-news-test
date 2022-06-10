import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import News from "../News/News";
import PageNotFound from "../PageNotFound/PageNotFound";
import NewsApi from "../../utils/api/NewsApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [news, setnews] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  const [isBadRequest, setIsBadRequest] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    initialNewsCheck();
  }, [isLoading]);

  const history = useHistory();
  useEffect(() => {
    loginCheck();
  }, []);

  const initialNewsCheck = () => {
    setIsLoading(true);
    const initialNews = JSON.parse(localStorage.getItem("initialNews"));
    if (initialNews) {
      setnews(initialNews);
      setIsLoading(false);
    } else {
      NewsApi.getNews()
        .then((newsData) => {
          setnews(newsData.data);
          localStorage.setItem("initialNews", JSON.stringify(newsData.data));
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const loginCheck = () => {
    const user = localStorage.getItem("user");
    const password = localStorage.getItem("password");
    if (user && password) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  const handleLogin = (user, password) => {
    if (user === "Admin" && password === "12345") {
      localStorage.setItem("user", user);
      localStorage.setItem("password", password);
      setIsBadRequest(false);
      setLoggedIn(true);
      history.push("/profile");
    } else {
      setIsBadRequest(true);
      setLoggedIn(false);
      history.push("/login");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    history.push("/");
  };

  return (
    <div className="App">
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/login">
            <Login
              loggedIn={loggedIn}
              handleLogin={handleLogin}
              isBadRequest={isBadRequest}
            />
          </Route>
          <Route exact path="/news">
            <News news={news} isLoading={isLoading} />
          </Route>
          <ProtectedRoute
            exact
            path="/profile"
            loggedIn={loggedIn}
            component={Profile}
            handleLogout={handleLogout}
          />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
