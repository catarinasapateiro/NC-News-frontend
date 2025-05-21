import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticlesByArticleId } from "../Api";
import "./articlereaderdisplay.css";
import { Link } from "react-router";

function ArticleReaderDisplay() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticlesByArticleId(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  if (isLoading) {
    return (
      <>
        <div className="articles-display">
          <h2 className="loading-text">is loading...</h2>
        </div>
      </>
    );
  } else {
    return (
      <div className="article-reader-container">
        <h3 className="article-reader-title">{article.title}</h3>

        <div className="article-reader-card">
          <p className="article-reader-text">{article.body}</p>
          <img
            className="article-reader-image"
            src={article.article_img_url}
            alt={article.title}
          />
        </div>
        <div className="article-reader-card-footer">
          <p className="article-reader-text">By {article.author}</p>
          <p className="article-reader-text">
            Published at: {article.created_at}
          </p>
          <Link
            to={`/${article.article_id}/comments`}
            className="reader-get-comment-link"
          >
            {article.comment_count} comments
          </Link>
          <button className="reader-post-comment-button">Add comment</button>
        </div>
      </div>
    );
  }
}

export default ArticleReaderDisplay;
