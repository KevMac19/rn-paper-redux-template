import * as actions from '../Types';

const initialState = {
  currentLanguage: 'en',
};

export const LanguageReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case actions.APP_LANGUAGE:
      return {...state, currentLanguage: payload};
    default:
      return state;
  }
};
