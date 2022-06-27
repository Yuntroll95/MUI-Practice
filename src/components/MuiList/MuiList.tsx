import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import styled from '@emotion/styled';
import { StyledEngineProvider } from '@mui/styled-engine'; // 본문을 감싸줘야함
import { Button, Grid, Box } from '@mui/material';
import { RecordList } from './RecordList';
import { RecorDashBoard } from './RecordDashBoard';

export const MuiList = () => {
  const handleClick = () => {};

  return (
    <StyledEngineProvider injectFirst>
      <List
        sx={{
          width: '254px',
          maxWidth: 360,
          height: '800px',
          bgcolor: '#f1f1f1',
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            sx={{ bgcolor: '#f1f1f1' }}
          >
            <SubHeader>BPS 재고관리시스템</SubHeader>
            <Grid container my={-1}>
              <Grid item xs={3} color="black">
                강남지점
              </Grid>
              <Grid item xs={4} color="black">
                홍길동
              </Grid>
              <Grid item xs={4}>
                <LoginBtn onClick={handleClick}>로그아웃</LoginBtn>
              </Grid>
            </Grid>
          </ListSubheader>
        }
      >
        <RecorDashBoard />
        <RecordList />
      </List>
    </StyledEngineProvider>
  );
};

const SubHeader = styled.span`
  font-size: 18px;
  color: black;
`;

const LoginBtn = styled.button`
  width: 70px;
  height: 30px;
  background-color: #ffffff;
  color: #808080;
  border: 1px solid #e2e2e2;
  cursor: pointer;
`;
