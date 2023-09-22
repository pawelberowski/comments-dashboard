import { useFetchedPhotos } from './useFetchedPhotos.jsx';
import { List } from '@mui/material';
import { PhotoTile } from './PhotoTile/PhotoTile.jsx';
import { useFetchedAlbums } from './useFetchedAlbums.jsx';

export const PhotosList = ({ userId }) => {
  const { areAlbumsLoading, albums } = useFetchedAlbums(userId);
  const { isLoading, photos } = useFetchedPhotos(albums);

  return (
    <div>
      {areAlbumsLoading && <p>Loading......</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <List>
          {photos.map((photo) => (
            <PhotoTile
              key={photo.id}
              title={photo.title}
              thumbnailUrl={photo.thumbnailUrl}
            />
          ))}
        </List>
      )}
    </div>
  );
};
