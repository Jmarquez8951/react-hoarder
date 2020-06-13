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

const getSingleStuff = (stuffId) => axios.get(`${baseUrl}/hoard/${stuffId}.json`);

const postStuff = (newStuff) => axios.post(`${baseUrl}/hoard.json`, newStuff);

const deleteStuff = (stuffId) => axios.delete(`${baseUrl}/hoard/${stuffId}.json`);

const putStuff = (stuffId, updatedStuff) => axios.put(`${baseUrl}/hoard/${stuffId}.json`, updatedStuff);

export default {
  getStuffByUid,
  getSingleStuff,
  postStuff,
  deleteStuff,
  putStuff,
};
