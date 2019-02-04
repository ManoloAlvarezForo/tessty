import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Routes from './Routes/Routes';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import indigo from '@material-ui/core/colors/blueGrey';

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
    background: {
      paper: '#414755',
      default: '#313640',
  },
  type: 'dark',
//  background:{  
//     paper:"rgba(239, 239, 239, 1)",
//     // default:"rgba(255, 255, 255, 1)"
//  },
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#13b9cc',
    },
    secondary: {
      main: '#13b9cc',
    },
    default: {
      main: '#383A47'
    },
  //   text:{  
  //     primary:"#f5f5f5",
  //     secondary:"#080808",
  //     disabled:"rgba(247, 247, 247, 0.38)",
  //     hint:"rgba(240, 234, 234, 0.38)"
  //  }

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