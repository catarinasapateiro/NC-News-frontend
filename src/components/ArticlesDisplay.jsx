import "./articlesdisplay.css";
import { Link } from "react-router";

function ArticlesDisplay({ articlesDisplay }) {
  return (
    <div className="articles-display">
      {articlesDisplay.map((article, index) => {
        return (
          <div key={index} className={`article-container-${index + 1}`}>
            <Link to={`/${article.article_id}`} className="article-title">
              {article.title}
            </Link>

            <div className="article-card">
              <p className="articles-text">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <img
                className={`image-${index + 1}`}
                src={article.article_img_url}
                alt={article.title}
              />
            </div>
            <div className="article-card-footer">
              <p className="articles-text">
                Published at:{" "}
                {new Date(article.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default ArticlesDisplay;
