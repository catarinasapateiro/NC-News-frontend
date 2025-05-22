import "./commentform.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AccountContext } from "./AccountContext";
import { postComment } from "../Api";
import { Link } from "react-router";

function CommentForm() {
  const { loggedInUser } = useContext(AccountContext);
  const { article_id } = useParams();
  const [postedComment, setPostedComment] = useState("");
  const [postedStatus, setPostedStatus] = useState(0);

  function handlePostComment(e) {
    setPostedComment(e.target.value);
  }

  function handlePostSubmit(e) {
    e.preventDefault();
    postComment(article_id, loggedInUser[0].username, postedComment)
      .then((res) => {
        console.log(res);
        setPostedStatus(res.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="comment-container">
      <div className="comment-card">
        {postedStatus === 0 && (
          <form onSubmit={handlePostSubmit}>
            <div>
              <label className="comment-text-label" htmlFor="comment-text">
                Post a comment
              </label>
            </div>
            <input
              type="text"
              name="comment-text"
              placeholder="Write your comment"
              className="comment-text-input"
              value={postedComment}
              onChange={handlePostComment}
            />
            <div className="comment-card-footer">
              <Link to={`/${article_id}`}>
                <button type="button" className="go-back-comment-button">
                  Go Back
                </button>
              </Link>
              <button type="submit" className="post-comment-button">
                Post
              </button>
            </div>
          </form>
        )}

        {postedStatus === 201 && (
          <div className="posted-comment-message">
            <p className="posted-comment-message-t">
              Comment successfully posted
            </p>
            <Link to={`/${article_id}`}>
              <button className="go-back-comment-button-message">
                Go Back
              </button>
            </Link>
          </div>
        )}

        {postedStatus === 400 ||
          postedStatus === 500 ||
          (postedStatus === 401 && (
            <div className="posted-comment-message">
              {setTimeout(() => {
                <p className="posted-comment-message-t">
                  Comment post was unsuccessful. Please try again
                </p>;
              }, 3000)}
            </div>
          ))}
      </div>
    </div>
  );
}

export default CommentForm;
