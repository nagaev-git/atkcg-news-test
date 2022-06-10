import "./NewsCard.css";

export default function MoviesCard({ card }) {
  return (
    <div className="news-card">
      <p>{card.content}</p>
      <img src={card.imageUrl} alt={card.title} />
    </div>
  );
}
