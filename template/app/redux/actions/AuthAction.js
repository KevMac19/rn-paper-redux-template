import * as actions from '../Types';

export const userLogin = isLogin => {
  return dispatch => {
    dispatch({type: actions.USER_LOGIN, payload: isLogin});
  };
};
