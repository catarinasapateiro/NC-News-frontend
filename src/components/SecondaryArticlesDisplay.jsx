import { Link } from "react-router";
import "./css_components/articlesdisplay.css";

function SecondaryArticlesDisplay({ articlesDisplay }) {
  return (
    <>
      {articlesDisplay.map((article, index) => (
        <div key={index} className={`article-container-secondary-${index}`}>
          <Link to={`/${article.article_id}`} className="article-title">
            {article.title}
          </Link>

          <div className="article-card">
            <img
              className={`image-${index + 1}`}
              src={article.article_img_url}
              alt={article.title}
            />
          </div>
          <div className="article-card-footer">
            <p className="articles-text">
              Published at: {new Date(article.created_at).toLocaleDateString()}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
export default SecondaryArticlesDisplay;
