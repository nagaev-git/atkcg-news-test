import "./NewsList.css";
import NewsCard from "../NewsCard/NewsCard";

export default function NewsList({ news }) {
  return (
    <section className="news-card-list">
      <ul className="news-card-list__list">
        {news.data.map((card) => (
          <li key={card.id}>
            <NewsCard card={card} />
          </li>
        ))}
      </ul>
    </section>
  );
}
