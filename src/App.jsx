import styles from './App.module.scss';
import { useEffect, useState } from 'react';
import CommentCard from './componetns/ComponentsCard/CommentCard.jsx';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <p>...loading</p>;
  return (
    <ul className={styles.list}>
      {data.comments.map((comment) => (
        <li className={styles.item} key={comment.id}>
          <CommentCard comment={comment} currentUser={data.currentUser} />
        </li>
      ))}
    </ul>
  );
}

export default App;
