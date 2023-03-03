import * as actions from '../Types';

const initialState = {
  isUserLogin: false,
};

export const AuthReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case actions.USER_LOGIN:
      return {
        ...state,
        isUserLogin: payload,
      };

    default:
      return state;
  }
};
