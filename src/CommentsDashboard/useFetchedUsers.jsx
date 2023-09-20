import { useEffect, useState } from 'react';

export function useFetchedUsers() {
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
