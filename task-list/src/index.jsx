import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from '@/styles';
import { TaskBox } from '@/pages'
import 'reportWebVitals';

render(
  <StrictMode>
    <GlobalStyle />
    <TaskBox />
  </StrictMode>,
  document.getElementById('root')
);
