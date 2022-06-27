import * as React from 'react';
import { Typography } from '@mui/material';

export const MuiTypogrphy = () => {
  // h4태그 보면 component에 'h1'이렇게 적혀 있는데, 개발자 도구로 검사하면 h1이랑 같은 스타일 적용된거 확인 가능
  // gutterBottom은 mui에서 사전에 설정한 margin-bottom 값을 적용해줌! 개발자 도구 들어가서 검색 고고
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Sub title1</Typography>
      <Typography variant="subtitle2">Sub title2</Typography>

      <Typography variant="body1">Body title1 p tag로 렌더링 됨!</Typography>
      <Typography variant="body2">Body title2 p tag로 렌더링 됨!</Typography>
    </div>
  );
};
