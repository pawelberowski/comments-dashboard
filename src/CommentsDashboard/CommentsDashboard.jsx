import { useState, useEffect } from 'react';

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

const UsersButtons = () => {
  const { isLoading, users } = useFetchedUsers();

  return (
    <div>
      {isLoading && <p>Loading users...</p>}
      {!isLoading && (
        <div>
          {users.map((user) => (
            <button key={user.id}>{user.name}</button>
          ))}
        </div>
      )}
    </div>
  );
};

export const CommentsDashboard = () => {
  return <UsersButtons />;
};
