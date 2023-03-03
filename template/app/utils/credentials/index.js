import {store} from 'redux-actions';
import {refreshAuthToken} from 'redux-actions';

async function getAccessUsingRefresh(refreshToken) {
  return store.dispatch(refreshAuthToken({refresh_token: refreshToken}));
}

async function getVerifiedKeys(keys) {
  if (keys) {
    // ** checking actual token expiry
    if (!isTokenExpired(keys.tokenTime)) {
      // ** actual token is not expired
      return keys;
    } else {
      // ** actual token expired and now checking for refresh token expiry
      if (!isTokenExpired(keys.refreshTokenTime)) {
        // ** refresh token is not expired
        const res = await getAccessUsingRefresh(keys.refreshToken);
        // ** auth token is now refreshed
        // console.log('Updated Data ==>', res);

        return res;
      } else {
        // ** refresh expired, please login
        // console.log('refresh token expired');
        return null;
      }
    }
  } else {
    // ** access not available please login
    return null;
  }
}

function isTokenExpired(expirationTime) {
  // console.log('Token Expiration time ==>', expirationTime);
  if (expirationTime < Date.now() / 1000) {
    return true;
  } else {
    return false;
  }
}

export const getCredentials = async () => {
  try {
    const credentials = store.getState().authReducer.userData ?? '';
    // console.log('token', credentials);
    let cred = await getVerifiedKeys(credentials);
    // console.log('verified credentials ==>', cred);
    if (credentials != null && cred != null) {
      return cred;
    } else {
      return null;
    }
  } catch (e) {
    // ** error for getting credentials
    // console.log(e);
  }
  console.groupEnd();
  return null;
};
