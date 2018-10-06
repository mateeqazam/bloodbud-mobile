
import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './utils/theme';
import AppContainer from './containers/App';

export default class Main extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppContainer />
      </ThemeProvider>
    );
  }
}
