import { useEffect, useState } from 'react';

export function useFetchedPhotos(albums) {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const photosPath = () => {
    let path = '';
    albums.forEach((album) => {
      path += `albumId=${album.id},`;
    });
    return path.split(',').join('&');
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?${photosPath()}`)
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
  }, [albums]);

  return {
    photos,
    isLoading,
  };
}
