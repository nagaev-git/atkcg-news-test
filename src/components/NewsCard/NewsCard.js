import "./NewsCard.css";

export default function MoviesCard({ card }) {
  return (
    <>
      <div className="news-card">
        <img
          src={card.imageUrl}
          alt={card.title}
          className="news-card__image"
        />
        <h2 className="news-card__title">{card.content}</h2>
      </div>
    </>
  );
}
