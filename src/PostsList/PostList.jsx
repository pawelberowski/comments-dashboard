import { PostTile } from './PostTile/PostTile.jsx';
import { List } from '@mui/material';
import { useFetchedPosts } from './useFetchedPosts';

export const PostsList = ({ userId }) => {
  const { isLoading, posts } = useFetchedPosts(userId);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <List>
          {posts.map((post) => (
            <PostTile key={post.id} title={post.title} body={post.body} />
          ))}
        </List>
      )}
    </div>
  );
};
