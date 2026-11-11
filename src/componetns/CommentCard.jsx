import { getAvatar } from '../utils/getAvatar.js';

function CommentCard({ comment, currentUser }) {
  console.log(currentUser.username === comment.user.username);

  return (
    <article className="comment-card">
      <header className="comment-card__header">
        <div className="comment-card__avatar">
          <picture>
            <source srcSet={getAvatar(comment.user.image.webp)} type="image/webp" />
            <img
              className="comment-card__avatar-image"
              src={getAvatar(comment.user.image.png)}
              alt={comment.user.username}
            />
          </picture>
        </div>
        <p className="comment-card__name">{comment.user.username}</p>
        <span>{comment.createdAt}</span>
      </header>
      <div className="comment-card__body">
        <p className="comment-card__description">{comment.content}</p>
      </div>
      <div className="comment-card__actions">
        <div className="comment-card__likes">
          <button>+</button>
          <span>{comment.score}</span>
          <button>-</button>
        </div>
        {comment.user.username === currentUser.username ? (
          <div>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        ) : (
          <button>Reply</button>
        )}
      </div>
    </article>
  );
}

export default CommentCard;
