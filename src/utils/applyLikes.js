export function applyLikes(item, direction) {
  const current = item.votedByMe ?? null;
  let isUp = direction === 'up';

  if (current === direction) {
    return { ...item, score: item.score + (isUp ? -1 : 1), votedByMe: null };
  }

  if (current === null) {
    return { ...item, score: item.score + (isUp ? 1 : -1), votedByMe: direction };
  }

  return { ...item, score: item.score + (isUp ? 2 : -2), votedByMe: direction };
}
