import React from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <button className="btn btn-danger m-2" onClick={this.loginClickEvent}><i class="fab fa-google-plus-g"></i> Google Auth</button>
      </div>
    );
  }
}

export default Auth;