// INFO: all API call methods added here
import {BASE_URL} from 'config';
import axios from 'axios';

const showLog = false;

function _post(url, headers, data) {
  const options = {
    url: url,
    method: 'POST',
    headers: headers.headers,
    data:
      headers.headers['Content-Type'] === 'multipart/form-data'
        ? data
        : JSON.stringify(data),
  };

  showLog && console.log('POST API OPTIONS ==>', options);

  return axios(options)
    .then(res => {
      showLog && console.log('POST API RESPONSE ==>', res.data);
      return res.data;
    })
    .catch(err => {
      showLog && console.log('POST API ERROR ==>', err);
      throw 'response' in err
        ? typeof err.response.data === 'object'
          ? err.response.data
          : err
        : err;
    });
}
function _put(url, headers, data) {
  const options = {
    url: url,
    method: 'PUT',
    headers: headers.headers,
    data:
      headers.headers['Content-Type'] === 'multipart/form-data'
        ? data
        : JSON.stringify(data),
  };

  showLog && console.log('PUT API OPTIONS ==>', options);

  return axios(options)
    .then(res => {
      showLog && console.log('PUT API RESPONSE ==>', res.data);
      return res.data;
    })
    .catch(err => {
      showLog && console.log('PUT API ERROR ==>', err);
      throw 'response' in err
        ? typeof err.response.data === 'object'
          ? err.response.data
          : err
        : err;
    });
}

function _get(url, headers) {
  const options = {
    url: url,
    method: 'GET',
    headers: headers.headers,
  };
  showLog && console.log('GET API OPTIONS ==>', options);
  return axios(options)
    .then(res => {
      showLog && console.log('GET API RESPONSE ==>', res.data);
      return res.data;
    })
    .catch(err => {
      showLog && console.log('GET API ERROR ==>', err);
      throw 'response' in err
        ? typeof err.response.data === 'object'
          ? err.response.data
          : err
        : err;
    });
}

function _delete(url, headers, data) {
  const options = {
    url: url,
    method: 'DELETE',
    headers: headers.headers,
    body: JSON.stringify(data),
  };
  showLog && console.log('DELETE API OPTIONS ==>', options);
  return axios(options)
    .then(res => {
      showLog && console.log('DELETE API RESPONSE ==>', res.data);
      return res.data;
    })
    .catch(err => {
      showLog && console.log('DELETE API ERROR ==>', err);
      throw 'response' in err
        ? typeof err.response.data === 'object'
          ? err.response.data
          : err
        : err;
    });
}

function _api_calls(type, url, headers = {}, data = {}) {
  url = `${BASE_URL + url}`;

  switch (type) {
    case 'POST':
      return _post(url, headers, data);
    case 'GET':
      return _get(url, headers);
    case 'DELETE':
      return _delete(url, headers, data);
    case 'PUT':
      return _put(url, headers, data);
    default:
      break;
  }
}

const HttpCalls = {_api_calls, _post, _get, _delete};

export default HttpCalls;
