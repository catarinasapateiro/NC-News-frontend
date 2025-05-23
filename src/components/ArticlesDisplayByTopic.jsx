import React, { useState, useEffect } from "react";
import { getArticlesByTopic } from "../Api";
import { useParams } from "react-router-dom";
import { Link } from "react-router";

function ArticlesDisplayByTopic() {
  const [articlesDisplayByTopic, setArticlesDisplayByTopic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    getArticlesByTopic(topic)
      .then((res) => {
        setIsLoading(false);
        const articles = [res[0], res[1], res[2], res[3], res[4], res[5]];
        setArticlesDisplayByTopic(articles);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
      });
  }, [topic]);

  if (isLoading) {
    return (
      <>
        <div className="articles-display-topic">
          <h2 className="loading-text">is loading...</h2>
        </div>
      </>
    );
  } else {
    return (
      <>
        {articlesDisplayByTopic.map((article, index) => (
          <div className={`article-container-topic-${index}`}>
            <Link to={`/${article.article_id}`} className="article-title">
              {article.title}
            </Link>

            <div className="article-card-topic">
              <img
                className={`image-${index + 1}`}
                src={article.article_img_url}
                alt={article.title}
              />
            </div>
            <div className="article-card-topic-footer">
              <p className="articles-text">
                Published at:{" "}
                {new Date(article.created_at).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default ArticlesDisplayByTopic;
