import "./NewsList.css";
import NewsCard from "../NewsCard/NewsCard";

export default function NewsList() {
  return (
    <section className="news-card-list">
      <ul className="news-card-list__list">
        <li>
          <NewsCard />
        </li>
        <li>
          <NewsCard />
        </li>
        <li>
          <NewsCard />
        </li>
        <li>
          <NewsCard />
        </li>
        <li>
          <NewsCard />
        </li>
        <li>
          <NewsCard />
        </li>
      </ul>
    </section>
  );
}
