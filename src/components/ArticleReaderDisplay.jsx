import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticlesByArticleId, patchArticleVotes } from "../Api";
import "./articlereaderdisplay.css";
import { Link } from "react-router";

function ArticleReaderDisplay() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);

  function handleVote() {
    if (hasVoted === false) {
      patchArticleVotes(article_id, 1)
        .then(() => {
          setHasVoted(true);
        })
        .catch((err) => {
          console.log(err);
          setHasVoted(false);
        });
    }
    if (hasVoted === true) {
      patchArticleVotes(article_id, -1)
        .then(() => {
          setHasVoted(false);
        })
        .catch((err) => {
          console.log(err);
          setHasVoted(true);
        });
    }
  }

  useEffect(() => {
    setIsLoading(true);
    getArticlesByArticleId(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
        console.log(article);
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
          <div>
            <p className="article-reader-text">By {article.author}</p>
            <p className="article-reader-text">
              Published at: {new Date(article.created_at).toLocaleDateString()}
            </p>
          </div>
          <div className="votes-box">
            <p>votes: {hasVoted ? article.votes + 1 : article.votes}</p>
            <button
              className={hasVoted ? "vote-heart-like" : "vote-heart-unlike"}
              onClick={() => handleVote()}
            >
              ❤
            </button>
          </div>
          <div>
            <p>{article.comment_count} comments</p>
            <Link to={`/${article.article_id}/comments/post`}>
              <button className="reader-post-comment-button">
                Add comment
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleReaderDisplay;
