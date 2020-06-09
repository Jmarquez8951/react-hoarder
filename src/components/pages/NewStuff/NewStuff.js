import React from 'react';
import './NewStuff.scss';

import authData from '../../../helpers/data/authData';
import stuffData from '../../../helpers/data/stuffData';

class NewStuff extends React.Component {
  state = {
    stuffImgUrl: '',
    stuffItem: '',
    stuffQuantity: 0,
    stuffColor: '',
    stuffDescription: '',
  }

  imgUrlChange = (e) => {
    e.preventDefault();
    this.setState({ stuffImgUrl: e.target.value });
  }

  itemChange = (e) => {
    e.preventDefault();
    this.setState({ stuffItem: e.target.value });
  }

  quantityChange = (e) => {
    e.preventDefault();
    this.setState({ stuffQuantity: e.target.value });
  }

  colorChange = (e) => {
    e.preventDefault();
    this.setState({ stuffColor: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ stuffDescription: e.target.value });
  }

  saveStuff = (e) => {
    e.preventDefault();
    const {
      stuffImgUrl,
      stuffItem,
      stuffQuantity,
      stuffColor,
      stuffDescription,
    } = this.state;
    const newStuff = {
      imgUrl: stuffImgUrl,
      item: stuffItem,
      quantity: stuffQuantity * 1,
      color: stuffColor,
      description: stuffDescription,
      uid: authData.getUid(),
    };
    stuffData.postStuff(newStuff)
      .then(() => this.props.history.push('/my-stuff'))
      .catch((err) => console.error('could not save new stuff', err));
  }

  render() {
    const {
      stuffImgUrl,
      stuffItem,
      stuffQuantity,
      stuffColor,
      stuffDescription,
    } = this.state;

    return (
      <div className="NewStuff col-12">
        <h1>New Stuff</h1>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="stuff-imgUrl">Image Url:</label>
            <input
             type="text"
             className="form-control"
             id="stuff-imgUrl"
             value={stuffImgUrl}
             onChange={this.imgUrlChange}
             />
          </div>
          <div className="form-group">
            <label htmlFor="stuff-item">Item Name:</label>
            <input
             type="text"
             className="form-control"
             id="stuff-item"
             value={stuffItem}
             onChange={this.itemChange}
             />
          </div>
          <div className="form-group">
            <label htmlFor="stuff-quantity">Quantity:</label>
            <input
             type="number"
             className="form-control"
             id="stuff-quantity"
             value={stuffQuantity}
             onChange={this.quantityChange}
             />
          </div>
          <div className="form-group">
            <label htmlFor="stuff-color">Color:</label>
            <input
             type="text"
             className="form-control"
             id="stuff-color"
             value={stuffColor}
             onChange={this.colorChange}
             />
          </div>
          <div className="form-group">
            <label htmlFor="stuff-description">Item Description:</label>
            <input
             type="text"
             className="form-control"
             id="stuff-description"
             value={stuffDescription}
             onChange={this.descriptionChange}
             />
          </div>
          <button onClick={this.saveStuff} className="btn btn-primary">Save Stuff</button>
        </form>
      </div>
    );
  }
}

export default NewStuff;
