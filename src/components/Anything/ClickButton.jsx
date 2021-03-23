import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  unselectedButton: {
    width: '100%',
    height: '100%',
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white",
      cursor: "default",
    }
  },
  selectedButton: {
    width: '100%',
    height: '100%',
    "&:hover": {
      cursor: "default",
    }
  },
});

export const ClickButton = ({ fullWidth, label, onClick, color, disabled }) => {
  const classes = useStyles();
  // console.log("change color");
  return (
    <Button
      className={color === "default" ? classes.unselectedButton : classes.selectedButton} disabled={disabled}
      fullWidth={fullWidth} onClick={onClick} color={color}
      variant="contained" disableRipple disableElevation={true}
    >
      {label}
    </Button>
  );
};