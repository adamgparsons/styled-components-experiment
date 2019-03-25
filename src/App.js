import React, { Component } from 'react';
import Header from './components/header';
import Heading1 from './components/heading1';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import '../node_modules/normalize.css';

import styled from 'styled-components';

const Main = styled.div`
  margin-top: ${props => props.theme.space[6]};
  margin-left : auto;
  margin-right: auto;
  max-width: 75%;
`;

class App extends Component {
  render() {
    return (
      // eslint-disable-next-line
      <ThemeProvider theme={theme} style="margin:0">
        <React.Fragment>
          <Header />
          <Main>
            <Heading1> Form Heading</Heading1>
          </Main>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
