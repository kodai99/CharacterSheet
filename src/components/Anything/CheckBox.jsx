import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export const CheckBox = ({ label, onChange, checked }) => {
  return (
    <FormGroup row>
      <FormControlLabel control={<Checkbox color="primary" checked={checked} name="checkedC" />} label={label} onChange={onChange} />
    </FormGroup>
  );
};
