import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
      <h2 className="preloader__text">Идет загрузка...</h2>
    </div>
  );
};

export default Preloader;
