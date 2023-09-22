import { useEffect, useState, useRef } from 'react';

export function useFetchedPosts(userId) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const cachedPosts = useRef({});

  useEffect(() => {
    if (cachedPosts.current[userId]) {
      setPosts(cachedPosts.current[userId]);
      return;
    }
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        cachedPosts.current[userId] = data;
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
