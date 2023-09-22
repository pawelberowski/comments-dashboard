import { useEffect, useState } from 'react';

export function useFetchedPhotos(userId) {
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        console.log('Albums loaded');
      });
  }, [userId]);

  useEffect(() => {
    const getPhotosPath = () => {
      const albumsIds = albums.map((album) => {
        return ['albumId', album.id];
      });
      const params = new URLSearchParams(albumsIds);
      return params.toString();
    };

    fetch(`https://jsonplaceholder.typicode.com/photos?${getPhotosPath()}`)
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
