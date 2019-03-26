import React, { Component } from "react";
import "../node_modules/normalize.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./theme";
import PositionSticky from "./components/Position";
import Header from "./components/header";
import Heading1 from "./components/heading1";
import Well from "./components/well";
import Input from "./components/input";

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800');
    font-family: 'Open Sans', sans-serif;
    margin:0;
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyles />
          <Header />
          <PositionSticky
            paddingTop="30px"
            fontWeight="bold"
            mt="50px"
            ml="auto"
            mr="auto"
            width="90%"
          >
            <Heading1> Form Heading</Heading1>
            <Well/>
            <Input/>
          </PositionSticky>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default App;
