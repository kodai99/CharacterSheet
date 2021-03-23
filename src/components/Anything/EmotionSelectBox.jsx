import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
  },
}));

export const EmotionSelectBox = ({ fullWidth, mainLabel, plusLabel, minusLabel, plusOptions, minusOptions, onChange, required, value }) => {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.formControl} fullWidth={fullWidth}>
        <InputLabel htmlFor="grouped-select">{mainLabel}</InputLabel>
        <Select defaultValue="" id="grouped-select" onChange={onChange} required={required} value={value}>
          <ListSubheader>{plusLabel}</ListSubheader>
          {plusOptions.map((option) => {
            return (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            );
          })}
          <ListSubheader>{minusLabel}</ListSubheader>
          {minusOptions.map((option) => {
            return (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};