import { useEffect, useState } from 'react';
import { PostTile } from './PostTile/PostTile.jsx';

function useFetchedPosts(userId) {
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

export const PostsList = ({ userId }) => {
  const { isLoading, posts } = useFetchedPosts(userId);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <div>
          {posts.map((post) => (
            <PostTile key={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      )}
    </div>
  );
};
