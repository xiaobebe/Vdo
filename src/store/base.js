import axios from 'axios';

const HOST = 'http://show.xbshumatt.com/vdo/api/index.php/';

export default function (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(HOST + url, { params })
      .then((res) => {
        resolve(res.data);
      }).catch(err => reject(err));
  });
}
