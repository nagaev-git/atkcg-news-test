import "./News.css";
import Header from "../Header/Header";
import NewsList from "../NewsList/NewsList";
import Footer from "../Footer/Footer";

export default function News({ news }) {
  return (
    <>
      <Header />
      <NewsList news={news} />
      <Footer />
    </>
  );
}
