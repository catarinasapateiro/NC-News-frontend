import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../Api";
import "./commentsdisplay.css";
import userAvatar from "../assets/147140.png";

function CommentsDisplay() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCommentsByArticleId(article_id)
      .then((comments) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  if (isLoading) {
    return (
      <div className="articles-display">
        <h2 className="loading-text">Loading comments...</h2>
      </div>
    );
  }

  return (
    <>
      <h3>Comments</h3>
      {comments.map((comment, index) => (
        <div key={index} className="comment-card">
          <div className="comment-card-header">
            <h5 className="comments-title-text">{comment.author}</h5>
          </div>
          <div className="comment-card-body">
            <div>
              <img src={userAvatar} alt="user photo" className="user-avatar" />
            </div>
            <div className="comments-text">
              <p>&quot;{comment.body}&quot;</p>
            </div>
          </div>

          <div className="comments-footer">
            <div className="stars">
              <span>★</span>
              <span>★</span>
            </div>
            <p className="comments-text-date">
              {new Date(comment.created_at).toLocaleDateString()}
            </p>
            <div className="votes-box">
              <p>
                <span>votes</span>: {comment.votes}
              </p>
              <button>❤</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CommentsDisplay;
