import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';

import Auth from '../components/pages/Auth/Auth';
import Home from '../components/pages/Home/Home';
import MyStuff from '../components/pages/MyStuff/MyStuff';
import EditStuff from '../components/pages/EditStuff/EditStuff';
import NewStuff from '../components/pages/NewStuff/NewStuff';
import SingleStuff from '../components/pages/SingleStuff/SingleStuff';

import './App.scss';

import fbConnection from '../helpers/data/connection';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar authed={authed}/>
            <div className="container">
              <div className="row">
                <Switch>
                  <PrivateRoute path='/home'component={Home} authed={authed} />
                  <PrivateRoute path='/new' component={NewStuff} authed={authed}/>
                  <PrivateRoute path='/my-stuff' component={MyStuff} authed={authed}/>
                  <PrivateRoute path='/edit/:stuffId' component={EditStuff} authed={authed}/>
                  <PrivateRoute path='/stuff/:stuffId' component={SingleStuff} authed={authed}/>
                  <PublicRoute path='/auth' component={Auth} authed={authed} />
                  <Redirect from="*" to="/home"/>
                </Switch>
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
