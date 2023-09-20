import { postsList } from './useDisplayedList.jsx';
import { PostsList } from '../PostsList/PostList.jsx';
import { PhotosList } from '../PhotosList/PhotosList.jsx';

export const DataLists = ({ currentUser, displayedList }) => {
  if (!currentUser) {
    return null;
  }
  if (displayedList === postsList) {
    return <PostsList userId={currentUser} />;
  }
  return <PhotosList />;
};
