import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core';
import LandingPage from './containers/LandingPage/LandingPage';
import NotFoundPage from './containers/NotFoundPage/NotFoundPage';
import './App.css';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  // palette: {
  //   type: "dark"
  // },
})

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <CssBaseline>
            <Switch>
              <Route path="/" exact component={LandingPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </CssBaseline>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App;