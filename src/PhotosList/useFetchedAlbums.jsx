import { useEffect, useState } from 'react';

export function useFetchedAlbums(userId) {
  const [albums, setAlbums] = useState([]);
  const [areAlbumsLoading, setAreAlbumsLoading] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data);
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      })
      .finally(() => {
        setAreAlbumsLoading(false);
      });
  }, [userId]);

  return {
    albums,
    areAlbumsLoading,
  };
}