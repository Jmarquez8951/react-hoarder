import React from 'react';
import './CardStuff.scss';

import { Link } from 'react-router-dom';

class CardStuff extends React.Component {
  render() {
    return (
      <div className="CardStuff">
        <h1>Card</h1>
        <Link className="btn btn-danger" to={'/edit/1223'}>Edit</Link>
        <Link className="btn btn-danger" to={'/stuff/1223'}>Single</Link>
      </div>
    );
  }
}

export default CardStuff;
