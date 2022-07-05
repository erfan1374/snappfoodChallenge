import axios from 'axios'
import config from "../config";

export default class apiCore {
  constructor(path) {
    this._path = path
    this._baseUrl = config.apiServer
  }

  send_request = o => {
    const req = {
      url: `${this._baseUrl}${o.path.length ? '/' : ''}${o.path}${o.action ? '/' : ''}${o.action || ''}`,
      method: o.method,
      params: o.params,
    }
    if (o.body) req.data = o.body
    req.headers = {
    }
    return axios(req).then(res => {
      return res.data
    }).catch(err => {
      if (err.message === 'Network Error') {

      } else if (err.response) {

      }
    })
  }

  request (o) {
    o.path = this._path;
    return this.send_request(o)
  }

}
