import "./News.css";
import Header from "../Header/Header";
import NewsList from "../NewsList/NewsList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

export default function News({ news, isLoading }) {
  return (
    <>
      <Header />
      {isLoading ? <Preloader /> : <NewsList news={news} />}
      <Footer />
    </>
  );
}
