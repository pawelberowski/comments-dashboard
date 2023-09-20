import { useState } from 'react';
import { UserButton } from '../UserButton/UserButton.jsx';
import { PostsList } from '../PostsList/PostList.jsx';
import Stack from '@mui/material/Stack';
import { SelectDisplayedListButtons } from '../SelectDisplayedListButtons/SelectDisplayedListButtons.jsx';
import { useFetchedUsers } from './useFetchedUsers.jsx';
import { useDisplayedList } from './useDisplayedList.jsx';
import { DataLists } from './DataLists.jsx';

export const CommentsDashboard = () => {
  const { isLoading, users } = useFetchedUsers();
  const [currentUser, setCurrentUser] = useState(null);
  const { displayedList, switchToPosts, switchToPhotos } = useDisplayedList();

  const handleClick = (userId) => {
    setCurrentUser(userId);
  };

  return (
    <div>
      <SelectDisplayedListButtons
        displayedList={displayedList}
        switchToPosts={switchToPosts}
        switchToPhotos={switchToPhotos}
      />
      {isLoading && <p>Loading users...</p>}
      {!isLoading && (
        <Stack direction="row" spacing={2}>
          {users.map((user) => (
            <UserButton
              key={user.id}
              userId={user.id}
              userName={user.name}
              isSelected={currentUser === user.id}
              onClick={() => handleClick(user.id)}
            />
          ))}
        </Stack>
      )}
      <DataLists displayedList={displayedList} currentUser={currentUser} />
    </div>
  );
};
