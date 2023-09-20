import { useState, useEffect } from 'react';
import { UserButton } from '../UserButton/UserButton.jsx';
import { PostsList } from '../PostsList/PostList.jsx';

function useFetchedUsers() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching data', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return {
    users,
    isLoading,
  };
}

export const CommentsDashboard = () => {
  const { isLoading, users } = useFetchedUsers();
  const [currentUser, setCurrentUser] = useState(null);

  const handleClick = (userId) => {
    setCurrentUser(userId);
  };

  return (
    <div>
      {isLoading && <p>Loading users...</p>}
      {!isLoading && (
        <div>
          {users.map((user) => (
            <UserButton
              key={user.id}
              userName={user.name}
              onClick={() => handleClick(user.id)}
            />
          ))}
        </div>
      )}
      {currentUser && <PostsList userId={currentUser} />}
    </div>
  );
};
