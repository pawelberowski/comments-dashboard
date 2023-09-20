import Button from '@mui/material/Button';
export const UserButton = ({ userName, onClick, isSelected }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      color={isSelected ? 'success' : 'primary'}
    >
      {userName}
    </Button>
  );
};
