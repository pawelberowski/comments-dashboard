import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { photosList, postsList } from '../useDisplayedList.jsx';

export const SelectDisplayedListButtons = ({
  displayedList,
  switchToPosts,
  switchToPhotos,
}) => {
  const isPostsList = displayedList === postsList;
  const isPhotosList = displayedList === photosList;

  return (
    <Stack direction="row" spacing={2} sx={{ marginBottom: '15px' }}>
      <Button
        variant="contained"
        color={isPostsList ? 'success' : 'primary'}
        onClick={switchToPosts}
      >
        Posts
      </Button>
      <Button
        variant="contained"
        color={isPhotosList ? 'success' : 'primary'}
        onClick={switchToPhotos}
      >
        Photos
      </Button>
    </Stack>
  );
};
