import React, { useState } from 'react';
import { StyledEngineProvider } from '@mui/styled-engine'; // 본문을 감싸줘야함
import { TextField, Box, MenuItem } from '@mui/material';

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <StyledEngineProvider injectFirst>
      <Box width="250px">
        <TextField
          label="Select Countries"
          select
          value={countries}
          onChange={handleChange}
          fullWidth
          SelectProps={{ multiple: true }}
          size="small"
          color="success"
          helperText="Please Select your country"
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Austrailia</MenuItem>
        </TextField>
      </Box>
    </StyledEngineProvider>
  );
};
