import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId, deleteComment } from "../Api";
import "./commentsdisplay.css";

function CommentsDisplay() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isCommentdeleted, setIsCommentDeleted] = useState(false);

  function handleDeletedComment(e) {
    const comment_id = e.target.value;
    setIsCommentDeleted(true);
    deleteComment(comment_id)
      .then((res) => {
        if (res.status === 204) {
          setIsCommentDeleted(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
  }, [article_id, isCommentdeleted]);

  if (isLoading) {
    return <div className="comments-display"></div>;
  }

  return (
    <div className="comments-display">
      <div className="comments-header">
        <h3>Comments</h3>
      </div>
      {comments.map((comment, index) => (
        <div key={index} className="comment-card">
          <div className="comment-card-header">
            <h5 className="comments-title-text">{comment.author}</h5>
          </div>
          <div className="comment-card-body">
            <div>
              <img
                src={comment.avatar_url}
                alt="user photo"
                className="user-avatar"
              />
            </div>
            <div className="comments-text">
              <p>&quot;{comment.body}&quot;</p>
            </div>
          </div>

          <div className="comments-footer">
            <div className="stars">
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className="comments-text-date">
              {new Date(comment.created_at).toLocaleDateString()}
            </p>
            {!isCommentdeleted ? (
              <button
                value={comment.comment_id}
                className="delete-comment-button"
                onClick={handleDeletedComment}
              >
                delete comment
              </button>
            ) : (
              <p>Please try again</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentsDisplay;
