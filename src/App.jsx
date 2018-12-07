import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { AppHeader, AppBody, LinkBtn2 } from './components/app-styles/AppTheme';
import Home from './components/Home';
import Films from './components/Films'
import People from './components/People';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <>
            <AppHeader>
                <LinkBtn2 to='/home'>Home</LinkBtn2> {/* 'LinkButton' is a custom version of the <Link> component that renders like a button */}
                <LinkBtn2 to='/films'>Films</LinkBtn2> {/* 'LinkBtn1' and 'LinkBtn2' are styled versions of the <LinkButton> */}
                <LinkBtn2 to='/people'>People</LinkBtn2> {/* See 'LinkButton.jsx' and 'AppTheme.jsx' for details */}
            </AppHeader>
            <AppBody>
              <Switch>
                <Route exact path="/home" render={(props) => <Home {... props} />} /> {/* 'render()' allows us to pass props into components through a 'Route' */}
                <Route exact path="/films" render={(props) => <Films {... props} />} />
                <Route exact path="/people" render={(props) => <People {... props} />} />
              </Switch>
            </AppBody>
          </>
        </Router>

      </>
    );
  }
}

export default App;
