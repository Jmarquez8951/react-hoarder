import React from 'react';
import { Link } from 'react-router-dom';

import './SingleStuff.scss';

import stuffData from '../../../helpers/data/stuffData';

class SingleStuff extends React.Component {
  state = {
    stuff: {},
  }

  componentDidMount() {
    const { stuffId } = this.props.match.params;
    stuffData.getSingleStuff(stuffId)
      .then((response) => this.setState({ stuff: response.data }))
      .catch((err) => console.error('could not get single stuff', err));
  }

  deleteStuff = () => {
    const { stuffId } = this.props.match.params;
    stuffData.deleteStuff(stuffId)
      .then(() => this.props.history.push('/my-stuff'))
      .catch((err) => console.error('could not delete stuff', err));
  }

  render() {
    const { stuff } = this.state;
    const { stuffId } = this.props.match.params;
    const editLink = `/edit/${stuffId}`;
    return (
      <div className="SingleStuff mx-auto p-4 m-4" style={{ backgroundColor: stuff.color }}>
        <div className="card" >
          <img src={stuff.imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h1>{stuff.item}</h1>
            <p className="card-text">{stuff.quantity}</p>
            <p className="card-text">{stuff.description}</p>
            <button className="btn btn-danger m-1" onClick={this.deleteStuff}><i className="fas fa-trash-alt"></i></button>
            <Link className="btn btn-warning m-1" to={editLink}><i className="fas fa-pen"></i></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleStuff;
