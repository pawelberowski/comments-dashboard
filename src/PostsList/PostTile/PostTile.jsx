import { ListItem } from '@mui/material';

export const PostTile = ({ title, body }) => {
  return (
    <ListItem>
      <h2>{title}</h2>
      <p>{body}</p>
    </ListItem>
  );
};
