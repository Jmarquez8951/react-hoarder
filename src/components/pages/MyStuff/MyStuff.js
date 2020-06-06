import React from 'react';
import './MyStuff.scss';
import { Link } from 'react-router-dom';

class MyStuff extends React.Component {
  render() {
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <Link className="btn btn-danger" to={'/edit/1223'}>Edit</Link>
        <Link className="btn btn-danger" to={'/stuff/1223'}>Single</Link>
      </div>
    );
  }
}

export default MyStuff;
