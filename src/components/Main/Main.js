import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import mainImg from "../../images/main_img.jpg";

export default function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <img src={mainImg} alt="" className="main__img" />
        <div className="main__caption">
          <h1 className="main__caption-title">Stay informed in 60 words.</h1>
          <h2 className="main__caption-text">
            We understand you don’t have time to go through long news articles
            everyday. So we cut the clutter and deliver them, in 60-word shorts.
            Short news for the mobile generation.
          </h2>
        </div>
      </main>
      <Footer />
    </>
  );
}
