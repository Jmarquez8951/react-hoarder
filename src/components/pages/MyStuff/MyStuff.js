import React from 'react';
import './MyStuff.scss';

import CardStuff from '../../shared/CardStuff/CardStuff';
import authData from '../../../helpers/data/authData';
import stuffData from '../../../helpers/data/stuffData';

class MyStuff extends React.Component {
  state = {
    stuffs: [],
  }

  getStuff = () => {
    const uid = authData.getUid();
    stuffData.getStuffByUid(uid)
      .then((stuffs) => {
        this.setState({ stuffs });
      })
      .catch((err) => console.error('could not get stuff', err));
  }

  componentDidMount() {
    this.getStuff();
  }

  removeStuff = (stuffId) => {
    stuffData.deleteStuff(stuffId)
      .then(() => this.getStuff())
      .catch((err) => console.error('could not delete stuff', err));
  }

  render() {
    const { stuffs } = this.state;
    const buildStuffCards = stuffs.map((stuff) => (
      <CardStuff key={stuff.id} stuff={stuff} removeStuff={this.removeStuff}/>
    ));

    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <div className="d-flex flex-wrap justify-content-center">
          {buildStuffCards}
        </div>
      </div>
    );
  }
}

export default MyStuff;
