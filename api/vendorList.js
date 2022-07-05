import apiBase from "./apiBase";
export default class VendorList extends apiBase{
  constructor() {
    const path = 'vendors-list'
    super(path);
  }

  getAll (params) {
    return this.request({
      method: 'GET',
      params
    })
  }
}
