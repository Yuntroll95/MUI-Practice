import * as React from 'react';
import { Stack, Button, IconButton } from '@mui/material';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';

export const MuiButton = () => {
  // theme의 spacing 메소드는 인자*8px를 반환하며 Grid의 spacing 속성에 0부터 10까지의 정수를 입력하면 값*8px 만큼의 간격을 두고 컴포넌트를 생성
  // Material icons 사용법
  // 1. npm install @mui/icons-material
  // 2. https://mui.com/material-ui/material-icons/ 들어가서 import 부분 복사하기
  // 3. vscode에 import 복붙 하고, 사용하고 싶은 곳에 셀프 클로징 태그!

  // onClick event
  // onClick={()=>alert('Clicked')}

  return (
    <Stack spacing={4} direction="row">
      <Stack spacing={2} direction="row">
        <Button variant="text" href="http://google.com">
          안녕!
        </Button>
        <Button variant="contained">Hello!</Button>
        <Button variant="outlined">Hallo!</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<AlarmOnIcon />}
          disableRipple
          onClick={() => alert('Clicked')}
        >
          Alram
        </Button>
        <Button variant="contained" endIcon={<AlarmOnIcon />} disabled>
          Alram
        </Button>
        <IconButton aria-label="alram" color="success" size="small">
          <AlarmOnIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
