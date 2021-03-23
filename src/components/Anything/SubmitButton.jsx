import React from 'react';
import Button from "@material-ui/core/Button";

export const SubmitButton = ({ label, onClick, className }) => {
  return (
    <Button
      variant="contained" color="primary" onClick={onClick} className={className}
    >
      {label}
    </Button>
  );
};