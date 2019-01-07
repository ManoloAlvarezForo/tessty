import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Routes from './Routes/Routes';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  // overrides: {
  //   // Name of the component ⚛️ / style sheet
  //   MuiButton: {
  //     // Name of the rule
  //     root: {
  //       // Some CSS
  //       background: 'linear-gradient(45deg, #13b9cc 30%, #13b9cc 90%)',
  //       borderRadius: 5,
  //       border: 0,
  //       color: 'white',
  //       height: 48,
  //       padding: '0 40px',
  //       boxShadow: '0 0 3px 1px rgba(0, 188, 212, 0.38)',
  //     },
  //   },
  // },
  palette: {
    // type: 'dark',
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#13b9cc',
      // main: '#F3663B', Orange.
      // main: '#03A9F4', Blue convination.
      // dark: 
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },

    // error: will use the default color
  },
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Nunito ExtraLight'
    ].join(','),
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default hot(module)(App);