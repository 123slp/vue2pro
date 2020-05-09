import axios from 'axios';

console.log(axios);

const commonAxios = {
  getData({
    method,
    params,
    url,
    baseUrl
  }) {
    let config = {
      url,
      baseUrl
    };
    switch (method) {
    case "get":
      config.params = params;
      break;
    case "post":
      config.data = params;
    };
    return axios.request(config);
  }
};
export default commonAxios;