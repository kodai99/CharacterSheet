import React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  formControl: {
    width: "100%",
  }
});

export const SelectBox = ({ label, onChange, options, required, value }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>{label}</InputLabel>
      <Select
        required={required} value={value}
        onChange={onChange}
      >
        {options.map((option) => {
          return (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};