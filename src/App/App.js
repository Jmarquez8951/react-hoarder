import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import './App.scss';

class App extends React.Component {
  state = {
    authed: false,
  }

  render() {
    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-info"><i className="fas fa-rocket"></i></button>
      </div>
    );
  }
}

export default App;
