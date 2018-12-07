import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import { AppHeader, AppBody, Button2 } from './components/app-styles/AppTheme';
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
              <Link to="/home">
                <Button2>Home</Button2>
              </Link>
              <Link to="/films">
                <Button2>Films</Button2>
              </Link>
              <Link to="/people">
                <Button2>People</Button2>
              </Link>
            </AppHeader>
            <AppBody>
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route exact path="/films" component={Films} />
                <Route exact path="/people" render={(props) => <People {...props} appStyle={true} />} />
              </Switch>

            </AppBody>

          </>
        </Router>

      </>
    );
  }
}

export default App;
