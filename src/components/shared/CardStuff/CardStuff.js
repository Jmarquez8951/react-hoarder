import React from 'react';
import './CardStuff.scss';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import stuffShape from '../../../helpers/propz/stuffShape';

class CardStuff extends React.Component {
  static propTypes = {
    stuff: stuffShape.stuffShape,
    removeStuff: PropTypes.func.isRequired,
  }

  render() {
    const { stuff, removeStuff } = this.props;
    const singleLink = `/stuff/${stuff.id}`;
    const editLink = `/edit/${stuff.id}`;
    return (
      <div className="CardStuff m-3 col-3 d-flex">
        <div className="card container-fluid">
          <div className="card-body">
            <h5 className="card-title">{stuff.item}</h5>
            <img src={stuff.imgUrl} className="card-img-top" alt="thing"/>
            <Link className="btn btn-primary m-1" to={singleLink}><i className="fas fa-binoculars"></i></Link>
            <Link className="btn btn-warning m-1" to={editLink}><i className="fas fa-pen"></i></Link>
            <button className="btn btn-danger m-1" onClick={() => removeStuff(stuff.id)}><i className="fas fa-trash-alt"></i></button>
            <p className="card-text">{stuff.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CardStuff;
