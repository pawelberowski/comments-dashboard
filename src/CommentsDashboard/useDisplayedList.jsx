import { useState } from 'react';

export const postsList = 'PostsList';
export const photosList = 'PhotosList';
export const useDisplayedList = () => {
  const [displayedList, setDisplayedList] = useState(postsList);

  const switchToPosts = () => {
    setDisplayedList(postsList);
  };

  const switchToPhotos = () => {
    setDisplayedList(photosList);
  };

  return {
    displayedList,
    switchToPhotos,
    switchToPosts,
  };
};
