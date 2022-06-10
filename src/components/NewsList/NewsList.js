import "./NewsList.css";
import NewsCard from "../NewsCard/NewsCard";

export default function NewsList({ news }) {
  return (
    <>
      <section className="news-card-list">
        <ul className="news-card-list__list">
          {Array.isArray(news)
            ? news.map((card) => (
                <li key={card.id}>
                  <NewsCard card={card} />
                </li>
              ))
            : "No news found"}
        </ul>
      </section>
    </>
  );
}
