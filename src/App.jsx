import { useEffect, useState } from 'react';
import CommentCard from './componetns/CommentCard.jsx';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  if (!data) return <p>...loading</p>;
  return <CommentCard comment={data.comments[0]} currentUser={data.currentUser} />;
}

export default App;
