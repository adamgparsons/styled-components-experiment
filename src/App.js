import React, { Component } from 'react';
import Header from './components/header';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header/>
      </ThemeProvider>
    );
  }
}

export default App;
