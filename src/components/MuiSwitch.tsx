import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export const MuiSwitch = () => {
  return (
    <FormGroup>
      <FormControlLabel control={<Switch defaultChecked />} label="DarkMode" />
      <FormControlLabel disabled control={<Switch />} label="Disabled" />
    </FormGroup>
  );
};
