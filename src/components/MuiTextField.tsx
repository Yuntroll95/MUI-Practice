import * as React from 'react';
import { Stack, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';

export const MuiTextField = () => {
  const [value, setValue] = useState('');
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Name" variant="filled" />
          <TextField label="Name" variant="standard" />
        </Stack>
        <Stack spacing={2} direction="row">
          <TextField label="Small secondary" size="small" color="secondary" />
        </Stack>
        <Stack spacing={2} direction="row">
          <TextField label="Form Input" required />
          <TextField
            label="Form Input"
            helperText="Do no share your password with anyone"
          />
        </Stack>
        <Stack spacing={2} direction="row">
          <TextField
            label="Form Input"
            required
            value={value}
            onChange={handleInput}
            error={!value}
            helperText={
              !value ? 'Required' : 'Do not share your password with anyone'
            }
          />
          <TextField
            label="Password"
            type="password"
            helperText="Do no share your password with anyone"
          />
          <TextField label="Read only" InputProps={{ readOnly: true }} />
        </Stack>
        <Stack spacing={2} direction="row">
          <TextField
            label="Amount"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
          <TextField
            label="Weight"
            InputProps={{
              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            }}
          />
        </Stack>
      </Stack>
    </div>
  );
};
