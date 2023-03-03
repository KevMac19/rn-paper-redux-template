// INFO: all APIs added here
import HttpCalls from './HttpCalls';
import {headersData} from './Services';
import {store, userLogout} from 'redux-actions';
import {getCredentials} from 'utils';

const getToken = async () => {
  let res = await getCredentials();

  if (res) {
    return res.token;
  } else {
    // ** AUTH and REFRESH TOKEN expired
    await store.dispatch(userLogout());
  }
};

export const _getRefreshAuthToken = async body => {
  let {_api_calls} = HttpCalls;

  let headers = await headersData({});

  return _api_calls('POST', '/get-refresh-token', headers, body);
};

export const _userLogin = async body => {
  let {_api_calls} = HttpCalls;

  let headers = await headersData({});

  return _api_calls('POST', '/login', headers, body);
};
