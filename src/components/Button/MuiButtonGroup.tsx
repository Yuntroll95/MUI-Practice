import * as React from 'react';
import { Stack, Button, ButtonGroup } from '@mui/material';

// orientation으로 버튼의 수직, 수평으로 정렬가능
export const MuiButtonGroup = () => {
  return (
    <div>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </div>
  );
};

export default MuiButtonGroup;
