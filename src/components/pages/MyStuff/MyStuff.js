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

  render() {
    const { stuffs } = this.state;
    const buildStuffCards = stuffs.map((stuff) => (
      <CardStuff key={stuff.id} stuff={stuff}/>
    ));

    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <div className="d-flex flex-wrap">
          {buildStuffCards}
        </div>
      </div>
    );
  }
}

export default MyStuff;
