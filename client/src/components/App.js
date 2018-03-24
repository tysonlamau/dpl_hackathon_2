import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import About from './About';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';
import { Header } from 'semantic-ui-react';
import FetchMenu from './FetchMenu';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/about"
              component={About}
            />
            <Route
              path="/menu"
              component={FetchMenu}
            />
            <AuthRoute
              exact
              path="/login"
              component={Login}
            />
            <AuthRoute
              exact
              path="/register"
              component={Register}
            />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
