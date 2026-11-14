import styles from './App.module.scss';
import { useEffect, useState } from 'react';
import CommentCard from './componetns/ComponentsCard/CommentCard.jsx';
import { applyLikes } from '@/utils/applyLikes.js';

function App() {
  const [comments, setComments] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((json) => {
        setComments(json.comments);
        setCurrentUser(json.currentUser);
        setLoading(false);
      });
  }, []);

  function handleLikes(id, direction) {
    setComments((prev) =>
      prev.map((comment) => {
        if (comment.id === id) {
          return applyLikes(comment, direction);
        }
        return {
          ...comment,
          replies: comment.replies.map((reply) =>
            reply.id === id ? applyLikes(reply, direction) : reply,
          ),
        };
      }),
    );
  }

  if (loading) return <p>...loading</p>;
  return (
    <ul className={styles.list}>
      {comments.map((comment) => (
        <li className={styles.item} key={comment.id}>
          <CommentCard comment={comment} currentUser={currentUser} onLikes={handleLikes} />
        </li>
      ))}
    </ul>
  );
}

export default App;
