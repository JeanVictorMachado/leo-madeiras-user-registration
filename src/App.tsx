import React from 'react';
import Routes from './routes';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

function App(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
