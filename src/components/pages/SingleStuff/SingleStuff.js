import React from 'react';
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

  render() {
    const { stuff } = this.state;
    return (
      <div className="SingleStuff mx-auto p-4 m-4" style={{ backgroundColor: stuff.color }}>
        <div class="card" >
          <img src={stuff.imgUrl} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h1>{stuff.item}</h1>
            <p class="card-text">{stuff.quantity}</p>
            <p class="card-text">{stuff.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleStuff;
