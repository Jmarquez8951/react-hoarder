import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const baseUrl = firebaseConfig.firebaseKeys.databaseURL;

const getStuffByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/hoard.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const fbStuff = response.data;
      const stuff = [];
      if (fbStuff) {
        Object.keys(fbStuff).forEach((fbId) => {
          fbStuff[fbId].id = fbId;
          stuff.push(fbStuff[fbId]);
        });
      }
      resolve(stuff);
    })
    .catch((err) => reject(err));
});

export default { getStuffByUid };
