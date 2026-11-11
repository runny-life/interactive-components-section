import styles from './ComponentsCard.module.scss';
import { getAvatar } from '../../utils/getAvatar.js';

function CommentCard({ comment, currentUser }) {
  console.log(currentUser.username === comment.user.username);

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.avatar}>
          <picture>
            <source srcSet={getAvatar(comment.user.image.webp)} type="image/webp" />
            <img
              className={styles.avatarImage}
              src={getAvatar(comment.user.image.png)}
              alt={comment.user.username}
            />
          </picture>
        </div>
        <p className={styles.name}>{comment.user.username}</p>
        <span>{comment.createdAt}</span>
      </header>
      <div className={styles.body}>
        <p className={styles.description}>{comment.content}</p>
      </div>
      <div className={styles.actions}>
        <div className={styles.likes}>
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
