import { useEffect, useState } from 'react';

export function useFetchedPhotos(userId) {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userId]);

  return {
    photos,
    isLoading,
  };
}
