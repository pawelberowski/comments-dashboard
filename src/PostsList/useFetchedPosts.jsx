import { useEffect, useState } from 'react';

export function useFetchedPosts(userId) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userId]);

  return {
    posts,
    isLoading,
  };
}
