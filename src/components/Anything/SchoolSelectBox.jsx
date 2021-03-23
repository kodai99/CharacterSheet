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

export const SchoolSelectBox = ({
  fullWidth, mainLabel, schoolData1Label, schoolData2Label, schoolData3Label,
  schoolData4Label, schoolData5Label, schoolData6Label, schoolData7Label,
  schoolData1Options, schoolData2Options, schoolData3Options,
  schoolData4Options, schoolData5Options, schoolData6Options, schoolData7Options,
  onChange, required, value
}) => {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.formControl} fullWidth={fullWidth}>
        <InputLabel htmlFor="grouped-select">{mainLabel}</InputLabel>
        <Select defaultValue="" id="grouped-select" onChange={onChange} value={value}>
          <ListSubheader>-</ListSubheader>
          {schoolData1Options.map((option) => {
            return (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            );
          })}
          <ListSubheader>-</ListSubheader>
          {schoolData2Options.map((option) => {
            return (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            );
          })}
          <ListSubheader>-</ListSubheader>
          {schoolData3Options.map((option) => {
            return (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            );
          })}
          <ListSubheader>-</ListSubheader>
          {schoolData4Options.map((option) => {
            return (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            );
          })}
          <ListSubheader>-</ListSubheader>
          {schoolData5Options.map((option) => {
            return (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            );
          })}
          <ListSubheader>-</ListSubheader>
          {schoolData6Options.map((option) => {
            return (
              <MenuItem key={option.id} value={option.id}>
                {option.name}
              </MenuItem>
            );
          })}
          <ListSubheader>-</ListSubheader>
          {schoolData7Options.map((option) => {
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