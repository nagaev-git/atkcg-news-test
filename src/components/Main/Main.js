import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <h1 className="main__title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus,
          quis vitae repellat autem, sed laborum enim ullam impedit harum et
          odio omnis ipsa libero beatae odit neque! Unde, nemo asperiores!
        </h1>
      </main>
      <Footer />
    </>
  );
}
