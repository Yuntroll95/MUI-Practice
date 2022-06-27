import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Router from './Router';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <Router />
    </ThemeProvider>
  </RecoilRoot>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import Router from './Router';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(<Router />);
