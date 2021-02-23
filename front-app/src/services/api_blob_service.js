export default class BlobService {
  constructor() {
    this.API_BLOB_URL = process.env.REACT_APP_DEV_SERVER_URL + 'api/blob/';
  }

  _resHandler = (res) => {
    if (res.ok)
      return res.json();
    else throw new Error(res)
  }

  upload = (files, callback) => {
    const data = new FormData();
    for (let file of files) {
      data.append(file.name, file);
    }
    fetch(this.API_BLOB_URL + 'upload', {
      method: 'POST',
      cache: 'no-cache',
      body: data
    })
      .then(this._resHandler)
      .then(callback)
      .catch(e => {
        console.log(e);
        return e
      })
  }

  refreshList = (callback = () => {}) => {
    fetch(this.API_BLOB_URL + 'list')
      .then(this._resHandler)
      .then(callback)
      .catch(e => {
        console.log(e);
        return e
      })
  }

  download_link = (name) => this.API_BLOB_URL + 'list/' + name;


}
