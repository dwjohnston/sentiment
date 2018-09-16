import React, { Component } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Body from "../Body/Body"

import { withStyles } from '@material-ui/core/styles';
import AllArticles from "../AllArticles/AllArticles";
import ErrorBanner from "../ErrorBanner/ErrorBanner";

const theme = createMuiTheme({
  palette: {

  }
});

const styles = theme => ({
  root: {
    display: 'flex',
    flexFlow: "column nowrap",
    height: "100%",
    fontFamily: theme.typography.fontFamily
  },

  body: {
    flex: "1 0 auto"
  }
});

function App(props) {
  const { children, classes, className, variant, ...other } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>

        <div className={classes.root}>
          <Header />

          <Body className={classes.body}>
            <ErrorBanner />
            <AllArticles />
          </Body>
          <Footer />
        </div>
      </ErrorBoundary>
    </MuiThemeProvider>
  );
}


export default withStyles(styles)(App);