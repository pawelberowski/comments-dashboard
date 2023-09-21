import { useFetchedPhotos } from './useFetchedPhotos.jsx';
import { List } from '@mui/material';
import { PhotoTile } from './PhotoTile/PhotoTile.jsx';

export const PhotosList = ({ userId }) => {
  const { isLoading, photos } = useFetchedPhotos(userId);

  return (
    <div>
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
