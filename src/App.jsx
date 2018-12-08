import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { AppHeader, AppBody, LinkBtn2, AppContainer, DivWrapper } from './components/app-styles/AppTheme';
import Home from './components/Home';
import Films from './components/Films'
import People from './components/People';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Router>
          <>
            <AppHeader>
              <DivWrapper style={{alignSelf: 'flex-end'}}>
                <LinkBtn2 to='/home' style={{width: '10em', height: '3vh'}}>Home</LinkBtn2> {/* 'LinkButton' is a custom version of the <Link> component that renders like a button */}
                <LinkBtn2 to='/films' style={{width: '10em', height: '3vh'}}>Films</LinkBtn2> {/* 'LinkBtn1' and 'LinkBtn2' are styled versions of the <LinkButton> */}
                <LinkBtn2 to='/people' style={{width: '10em', height: '3vh'}}>People</LinkBtn2> {/* See 'LinkButton.jsx' and 'AppTheme.jsx' for details */}
              </DivWrapper>
            </AppHeader>
            <AppBody>
              <Switch>
                <Route exact path="/home" render={(props) => <Home {...props} />} /> {/* 'render()' allows us to pass props into components through a 'Route' */}
                <Route exact path="/films" render={(props) => <Films {...props} />} />
                <Route exact path="/people" render={(props) => <People {...props} />} />
              </Switch>
            </AppBody>
          </>
        </Router>
      </AppContainer>
    );
  }
}

export default App;
