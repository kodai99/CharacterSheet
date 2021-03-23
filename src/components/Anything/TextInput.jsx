import React from 'react'
import TextField from "@material-ui/core/TextField";

export const TextInput = ({ fullWidth, label, multiline, onChange, required, rows, type, value }) => {
  return (
    <TextField
      fullWidth={fullWidth}
      label={label}
      margin="dense"
      multiline={multiline}
      onChange={onChange}
      required={required}
      rows={rows}
      type={type}
      value={value}
    />
  );
};