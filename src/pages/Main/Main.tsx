import * as React from 'react';
import styled from '@emotion/styled';
import { StyledEngineProvider } from '@mui/styled-engine'; // 본문을 감싸줘야함
import { Nav } from '../../components/Nav/Nav';
import { MuiList } from '../../components/MuiList/MuiList';

const Main = (): JSX.Element => {
  return (
    <StyledEngineProvider injectFirst>
      <Nav />
      <MuiList />
      <MainContainer>
        <MainWrapper></MainWrapper>
        <MuiList />
      </MainContainer>
    </StyledEngineProvider>
  );
};

const MainContainer = styled.div`
  margin: 100px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Main;
