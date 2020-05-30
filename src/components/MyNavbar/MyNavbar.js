import React from 'react';

import './MyNavbar.scss';

class myNavbar extends React.Component {
  render() {
    return (
      <div className="MyNavbar">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Hoarder
          </a>
        </nav>
      </div>
    );
  }
}

export default myNavbar;
