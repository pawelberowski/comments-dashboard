import Button from '@mui/material/Button';
export const UserButton = ({ userName, onClick }) => {
  return (
    <Button variant={'outlined'} onClick={onClick}>
      {userName}
    </Button>
  );
};
