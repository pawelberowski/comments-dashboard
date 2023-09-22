import { ListItem } from '@mui/material';

export const PhotoTile = ({ title, thumbnailUrl }) => {
  return (
    <ListItem>
      <h2>{title}</h2>
      <img src={thumbnailUrl} alt={title} />
    </ListItem>
  );
};
