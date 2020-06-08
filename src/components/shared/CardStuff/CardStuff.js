import React from 'react';
import './CardStuff.scss';

import { Link } from 'react-router-dom';
import stuffShape from '../../../helpers/propz/stuffShape';

class CardStuff extends React.Component {
  static propTypes = {
    stuff: stuffShape.stuffShape,
  }

  render() {
    const { stuff } = this.props;
    const singleLink = `/stuff/${stuff.id}`;
    const editLink = `/edit/${stuff.id}`;
    return (
      <div className="CardStuff m-3 col-3 d-flex">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{stuff.item}</h5>
            <Link className="btn btn-outline-primary" to={singleLink}><i className="fas fa-binoculars"></i></Link>
            <Link className="btn btn-outline-warning" to={editLink}><i class="fas fa-pen"></i></Link>
            <p className="card-text">{stuff.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardStuff;
